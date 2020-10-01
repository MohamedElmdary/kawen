import React, { useRef, ChangeEvent } from 'react';
import classes from './checkInput.module.scss';

interface Props {
    label?: string;
    checked: boolean;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const CheckInput: React.FC<Props> = ({ checked, label, onChange }) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className={classes.checkbox}>
            <input type="checkbox" hidden {...{ ref, checked, onChange }} />
            <label onClick={() => ref.current?.click()}>
                <span className={classes.checkbox__svg}>
                    <svg
                        width="100%"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g transform="translate(-3 -3)">
                            <path
                                className="checkbox__svg"
                                fill="none"
                                d="M4.55 8l2.25 2.25L11.05 6"
                                stroke="var(--white)"
                                strokeWidth="1"
                            ></path>
                        </g>
                    </svg>
                </span>
                {label && <p>{label}</p>}
            </label>
        </div>
    );
};
export default CheckInput;
