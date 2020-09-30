import React, { Dispatch, useRef, useState, useEffect } from 'react';
import classes from './profileNavbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAVITEMS } from '../../constants/data';
import useMediaQuery from '../../hooks/useMediaQuery';

interface Props {
    active: number;
    setActive: Dispatch<React.SetStateAction<number>>;
    setEdit: Dispatch<React.SetStateAction<boolean>>;
    edit: boolean;
    me: boolean;
}

const length = NAVITEMS.length;

const ProfileNavbar: React.FC<Props> = (props) => {
    const { active, setActive, me, setEdit, edit } = props;
    const isMd = useMediaQuery('(max-width: 667px)');
    const isSm = useMediaQuery('(max-width: 500px)');
    const router = useRouter();
    const refs = Array.from({ length }, () => useRef<HTMLButtonElement>(null));
    const [[left, width], setLeftWidth] = useState([0, 0]);

    const setIndicator = ({ offsetLeft, offsetWidth }: HTMLElement) => {
        setLeftWidth([offsetLeft, offsetWidth]);
    };

    useEffect(() => {
        setIndicator(refs[active].current as HTMLElement);
    }, [active, isSm]);

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
            isSm ? classes.is__sm : '',
        ].join(' ');

        const as = '/user/' + router.query.id + (i === 0 ? '' : '?page=' + key);
        return (
            <Link href="/user/[id]" {...{ key, as }} scroll={false}>
                <button {...{ ref, className, onClick }}>
                    {/* \n */}
                    {isSm ? key.split(' ').pop() : key}
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
            <div
                className={[
                    classes.navbar__actions,
                    me ? '' : classes.navbar__actions__other,
                ].join(' ')}
            >
                {me ? (
                    <button
                        className={[
                            'btn',
                            isMd ? classes.md__btn : '',
                            isSm ? classes.sm__btn : '',
                        ].join(' ')}
                        onClick={() => setEdit(!edit)}
                    >
                        {edit ? (
                            <span>{isMd ? 'Save' : 'Save Changes'}</span>
                        ) : (
                            <>
                                <img
                                    src="/images/icons/edit.svg"
                                    alt="edit icon"
                                />
                                {!isMd && <span>Edit Profile</span>}
                            </>
                        )}
                    </button>
                ) : (
                    <>
                        <button
                            style={{ marginRight: isMd ? '5px' : '8px' }}
                            className={[
                                'btn',
                                isMd ? classes.md__btn : '',
                                isSm ? classes.sm__btn : '',
                            ].join(' ')}
                        >
                            <span>{isMd ? 'Msg' : 'Send Message'}</span>
                        </button>
                        <button
                            className={[
                                'btn',
                                isMd ? classes.md__btn : '',
                                isSm ? classes.sm__btn : '',
                                classes.reversed__btn,
                            ].join(' ')}
                        >
                            <span>Add{isMd ? '' : ' to contacts'}</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileNavbar;
