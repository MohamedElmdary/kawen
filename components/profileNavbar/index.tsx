import React, { Dispatch, useRef, useState, useEffect } from 'react';
import classes from './profileNavbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAVITEMS } from '../../constants/data';

interface Props {
    active: number;
    setActive: Dispatch<React.SetStateAction<number>>;
}

const length = NAVITEMS.length;

const ProfileNavbar: React.FC<Props> = ({ active, setActive }) => {
    const router = useRouter();
    const refs = Array.from({ length }, () => useRef<HTMLButtonElement>(null));
    const [[left, width], setLeftWidth] = useState([0, 0]);

    const setIndicator = ({ offsetLeft, offsetWidth }: HTMLElement) => {
        setLeftWidth([offsetLeft, offsetWidth]);
    };

    useEffect(() => {
        setIndicator(refs[active].current as HTMLElement);
    }, []);

    const links = NAVITEMS.map((key, i) => {
        const ref = refs[i];
        const onClick = () => {
            if (active !== i) {
                setActive(i);
                setIndicator(ref.current as HTMLElement);
            }
        };
        const className = [
            classes.navbar__item,
            'h5-regular',
            active === i ? classes.active : '',
        ].join(' ');

        const as = '/user/' + router.query.id + (i === 0 ? '' : '?page=' + key);
        return (
            <Link href="/user/[id]" {...{ key, as }} scroll={false}>
                <button {...{ ref, className, onClick }}>
                    {/* \n */}
                    {key}
                </button>
            </Link>
        );
    });

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__list}>
                {links}
                <span
                    className={classes.navbar__indicator}
                    style={{
                        transform: `translateX(${left}px) scaleX(${width})`,
                    }}
                />
            </div>
            <div className={classes.navbar__actions}>
                <button className="btn">
                    <img src="/images/icons/edit.svg" alt="edit icon" />
                    <span>Edit Profile</span>
                </button>
            </div>
        </div>
    );
};

export default ProfileNavbar;
