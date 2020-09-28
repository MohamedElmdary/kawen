import { useRef, RefObject, FocusEvent, ChangeEvent, useState } from 'react';

interface Validate {
    validate(
        value: string,
        inputsValues: { name: string; value: string }[]
    ): boolean;
    error: string;
}

interface UseFormOptions {
    type: 'text' | 'email' | 'number' | 'password';
    name: string;
    validates: Validate[];
    label: string;
}

interface UseFormReturn {
    type: 'text' | 'email' | 'number' | 'password';
    name: string;
    error: string;
    label: string;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
    onBlur?(e: FocusEvent<HTMLInputElement>): void;
    onFocus?(e: FocusEvent<HTMLInputElement>): void;
    ref: RefObject<HTMLInputElement>;
    value: string;
    touch: boolean;
}

function useForm(inputs: UseFormOptions[]): UseFormReturn[] {
    const length = inputs.length;
    const refs = Array.from({ length }, () => useRef(null));
    const values = Array.from({ length }, () => useState(''));
    const errors = Array.from({ length }, () => useState(''));
    const touched = Array.from({ length }, () => useRef(false));

    const inputsValues = values.map(([value], index) => {
        const { name } = inputs[index];
        return { name, value: value.trim() };
    });

    return inputs.map((input, i) => {
        const { type, label, name, validates } = input;
        const [value, setValue] = values[i];
        const [error, setError] = errors[i];

        const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
            for (let x = 0; x < validates.length; x++) {
                const validate = validates[x];
                if (!validate.validate(e.target.value.trim(), inputsValues)) {
                    if (error !== validate.error) {
                        setError(validate.error);
                    }
                    return;
                }
            }
            setError('');
        };

        const touch = touched[i];

        return {
            type,
            label,
            name,
            ref: refs[i],
            onBlur,
            onFocus: touch.current ? undefined : () => (touch.current = true),
            onChange: (e) => {
                setValue(e.target.value);
                onBlur(e);
            },
            touch: touch.current,
            error,
            value,
        };
    });
}

export const requiredValidate = (name: string) => {
    return {
        validate(value: string) {
            return value.length > 0;
        },
        error: `${name} is required.`,
    };
};

interface ValuesType {
    [key: string]: string;
}
interface GetFormValueReturn {
    valid: boolean;
    values: ValuesType;
    input: HTMLInputElement | null;
}

export const getFormValue = (form: UseFormReturn[]): GetFormValueReturn => {
    const firstInvalidInput = form.find(
        (input) => !input.touch || input.error !== ''
    );
    const values = form.reduce((result: ValuesType, input) => {
        const { name, value } = input;
        result[name] = value;
        return result;
    }, {});
    return {
        valid: !firstInvalidInput,
        values,
        input: firstInvalidInput ? firstInvalidInput.ref.current : null,
    };
};

export default useForm;
