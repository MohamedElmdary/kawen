import React from 'react';
import classes from './searchInput.module.scss';

const searchInput: React.FC = () => {
    return (
        <div className={classes.search}>
            <div className={classes.search__icon}>
                <img src="/images/icons/search-icon.svg" alt="search icon" />
            </div>
            <input
                className={classes.search__input}
                type="text"
                name="search"
                placeholder="Search"
            />
        </div>
    );
};

export default searchInput;
