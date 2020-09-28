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
    ref: RefObject<HTMLInputElement>;
    value: string;
}

function useForm(inputs: UseFormOptions[]): UseFormReturn[] {
    const length = inputs.length;
    const refs = Array.from({ length }, () => useRef(null));
    const values = Array.from({ length }, () => useState(''));
    const errors = Array.from({ length }, () => useState(''));

    const inputsValues = values.map(([value], index) => {
        const { name } = inputs[index];
        return { name, value };
    });

    return inputs.map((input, i) => {
        const { type, label, name, validates } = input;
        const [value, setValue] = values[i];
        const [error, setError] = errors[i];

        const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
            for (let x = 0; x < validates.length; x++) {
                const validate = validates[x];
                if (!validate.validate(e.target.value, inputsValues)) {
                    if (error !== validate.error) {
                        setError(validate.error);
                    }
                    return;
                }
            }
            setError('');
        };

        return {
            type,
            label,
            name,
            ref: refs[i],
            onBlur,
            onChange: (e) => {
                setValue(e.target.value);
                onBlur(e);
            },
            error,
            value,
        };
    });
}

export default useForm;
