import React from 'react';
import { User } from '../../../store/auth';

interface Props {
    members: User[];
}

const GroupMembers: React.FC<Props> = ({ members }) => {
    return (
        <div>
            <p>
                <span>{members.length}</span>
            </p>
        </div>
    );
};

export default GroupMembers;
