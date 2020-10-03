import React, { useRef, useEffect, useState } from 'react';
import { User } from '../../../store/auth';
import classes from './groupMembers.module.scss';

interface Props {
    members: User[];
}

const GroupMembers: React.FC<Props> = ({ members }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [n, setN] = useState(members.length);

    useEffect(() => {
        const _onResize = () => {
            const el = containerRef.current;
            if (el) {
                const newN = Math.floor(el.offsetWidth / 45);
                if (n !== newN) setN(newN);
            }
        };
        _onResize();
        window.addEventListener('resize', _onResize);
        return () => {
            window.removeEventListener('resize', _onResize);
        };
    }, [setN]);

    const membersCmp = members
        .slice(0, n)
        .map(({ id: key, image, name: title }) => {
            return (
                <div
                    {...{ title, key }}
                    className={classes.group__member}
                    style={{
                        backgroundImage: `url(${image})`,
                        zIndex: members.length - key,
                        transform: `translateX(${44 * key}px)`,
                    }}
                />
            );
        });

    return (
        <section className={classes.group__members}>
            <div className={classes.group__members__header}>
                <h5>Members</h5>
                <button className="btn">+ Add members</button>
            </div>
            <div className={classes.group__container} ref={containerRef}>
                {/* \n */}
                {membersCmp}
                <button
                    className={classes.group__container__action}
                    style={{ zIndex: members.length }}
                >
                    <img src="/images/icons/dots-menu.svg" alt="menu icon" />
                </button>
            </div>
        </section>
    );
};

export default GroupMembers;
