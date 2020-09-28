import { useRef, RefObject, FocusEvent, ChangeEvent, useState } from 'react';

interface Validate {
    validate(
        value: string,
        inputsValues: { name: string; value: string }[]
    ): boolean;
    error: string;
}

interface UseFormOptions {
    type: string;
    name: string;
    validates: Validate[];
    label: string;
    required: boolean;
}

interface UseFormReturn {
    type: string;
    name: string;
    error: string;
    label: string;
    onFocus?(e: FocusEvent<HTMLInputElement>): void;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
    ref: RefObject<HTMLInputElement>;
    value: string;
}

function useForm(inputs: UseFormOptions[]): UseFormReturn[] {
    const length = inputs.length;
    const refs = Array.from({ length }, () => useRef(null));
    const values = Array.from({ length }, () => useState(''));
    const touched = Array.from({ length }, () => useRef(false));

    const inputsValues = values.map(([value], index) => {
        const { name } = inputs[index];
        return { name, value };
    });

    return inputs.map((input, i) => {
        const { type, label, name, validates } = input;
        let error = '';
        if (touched[i].current) {
            for (let x = 0; x < validates.length; x++) {
                const validate = validates[x];
                if (!validate.validate(values[i][0], inputsValues)) {
                    error = validate.error;
                    break;
                }
            }
        }
        return {
            type,
            label,
            name,
            ref: refs[i],
            onFocus: touched[i].current
                ? undefined
                : () => (touched[i].current = true),
            onChange: (e) => values[i][1](e.target.value),
            error,
            value: values[i][0],
        };
    });
}

export default useForm;
