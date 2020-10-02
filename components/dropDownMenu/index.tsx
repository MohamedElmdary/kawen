import React, { MouseEvent, useState, useEffect, useContext } from 'react';
import classes from './dropDownMenu.module.scss';

interface MenuProps {
    left: boolean;
    dropdownClass?: string;
}

export const DropDownMenu: React.FC<MenuProps> = (props) => {
    const { children, left, dropdownClass } = props;
    return (
        /* prettier-ignore */
        <section onClick={e => e.stopPropagation()} className={[
            classes.dropdown__menu,
            left ? classes.left : '',
            dropdownClass ?? '',
        ].join(' ')}>
            {children}
        </section>
    );
};

interface Props {
    actionClass?: string;
    actionElement?: JSX.Element;
    left?: boolean;
    dropdownClass?: string;
}

const dropDownContext = React.createContext({ closeMenu: () => {} });
const DropDown: React.FC<Props> = (props) => {
    /* prettier-ignore */
    const { dropdownClass, children, actionClass, actionElement, left = false } = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const _onClick = () => setOpen(false);
        window.addEventListener('click', _onClick);

        return () => {
            window.removeEventListener('click', _onClick);
        };
    }, [open]);

    return (
        /* prettier-ignore */
        <dropDownContext.Provider value={{closeMenu: () => setOpen(false)}}>
            <section className={classes.dropdown}>
                <div className={classes.dropdown__action}>
                    <button onClick={() => setOpen(!open)} className={actionClass}>
                        {actionElement}
                    </button>
                </div>
                {open && <DropDownMenu {...{ left, dropdownClass}}>
                    {children}
                </DropDownMenu>}
            </section>
        </dropDownContext.Provider>
    );
};

interface ItemProps {
    onClick?(e: MouseEvent<HTMLDivElement>): void;
}

export const DropDownItem: React.FC<ItemProps> = ({ children, onClick }) => {
    const { closeMenu } = useContext(dropDownContext);

    return (
        <div
            onClick={(e) => {
                onClick?.(e);
                closeMenu();
            }}
            className={classes.dropdown__item}
            role="button"
        >
            {children}
        </div>
    );
};

export const DropDownDivider: React.FC = () => {
    return <div className={classes.dropdown__divider} />;
};

export default DropDown;
