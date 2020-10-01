import React from 'react';
import classes from './svgCircle.module.scss';

interface Props {
    stroke?: string;
    progress?: number;
    animate?: boolean;
}

const SvgCircle: React.FC<Props> = ({
    progress,
    stroke = 'var(--feedback)',
    animate = false,
}) => {
    const r = 50;
    const strokelength = 2 * Math.PI * r;

    return (
        <svg viewBox="0 0 104 104" width="100%">
            <circle
                cx="52"
                cy="52"
                fill="none"
                r="50"
                style={{
                    stroke: 'var(--it-2)',
                    strokeWidth: '4',
                }}
            />
            <circle
                cx="52"
                cy="52"
                fill="none"
                r="50"
                className={animate ? classes.animate : undefined}
                style={{
                    transformOrigin: 'center center',
                    transform: 'rotate(-90deg)',
                    stroke,
                    strokeWidth: '4',
                    strokeDasharray: strokelength,
                    strokeDashoffset: progress
                        ? strokelength * (1 - progress)
                        : undefined,
                }}
            />
        </svg>
    );
};

export default SvgCircle;
