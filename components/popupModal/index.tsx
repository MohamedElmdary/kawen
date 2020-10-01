import React, { useState, useEffect } from 'react';
import classes from './popupModal.module.scss';

interface Props {
    open?: boolean;
    onRequestClose?(): void;
}

const PopupModal: React.FC<Props> = ({ children, open, onRequestClose }) => {
    const [mount, setMount] = useState(open);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        }
    }, [open]);

    useEffect(() => {
        let cls: any;
        if (mount && !open) {
            cls = setTimeout(() => {
                setMount(false);
                document.body.style.overflow = null as any;
            }, 200);
        } else if (open && !mount) {
            setMount(true);
        }
        return () => {
            if (cls) {
                clearTimeout(cls);
            }
        };
    }, [open]);

    if (!mount) {
        return null;
    }
    return (
        <section
            className={[
                classes.popup,
                !open && mount ? classes.animate__out : '',
            ].join(' ')}
            onClick={() => onRequestClose?.()}
        >
            <div
                className={classes.popup__container}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </section>
    );
};

export default PopupModal;
