import { User } from '../store/auth';
import { ChallengeGroupModel, groups } from './groups';
import users from './users';

export interface NotificationModel {
    id: number;
    user: User;
    group: ChallengeGroupModel;
    message: string;
    seen: boolean;
    date: Date | number;
}

const notifications: NotificationModel[] = Array.from(
    { length: 50 },
    (_, id) => {
        return {
            id,
            user: users[id % 2],
            group: groups[0],
            message: 'achived a new badge',
            seen: id > 1,
            date: new Date().getTime() - 10 * 60000 /* 10 mins */,
        };
    }
);

export default notifications;
