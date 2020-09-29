import React, { Dispatch } from 'react';
import classes from './searchInput.module.scss';

interface Props {
    focus: boolean;
    setFocus: Dispatch<React.SetStateAction<boolean>>;
    isMobile: boolean;
}

const searchInput: React.FC<Props> = ({ isMobile, focus, setFocus }) => {
    return (
        <div
            className={[
                classes.search,
                focus && isMobile ? classes.search__focus : '',
            ].join(' ')}
        >
            <div className={classes.search__icon}>
                <img src="/images/icons/search-icon.svg" alt="search icon" />
            </div>
            <input
                autoComplete="off"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className={classes.search__input}
                type="text"
                name="search"
                placeholder="Search"
            />
        </div>
    );
};

export default searchInput;
