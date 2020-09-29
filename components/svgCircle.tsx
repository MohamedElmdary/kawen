import React from 'react';

interface Props {
    progress: number;
    stroke?: string;
}

const SvgCircle: React.FC<Props> = ({
    progress,
    stroke = 'var(--feedback)',
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
                    stroke,
                    strokeWidth: '4',
                    strokeDasharray: strokelength,
                    strokeDashoffset: strokelength * (1 - progress),
                }}
            />
        </svg>
    );
};

export default SvgCircle;
