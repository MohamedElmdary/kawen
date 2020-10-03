import { User } from '../store/auth';
import users from './users';

export interface Progression {
    user: User;
    productivity: number;
    quizzes: number;
    finalTest: number;
}

export interface ChallengeGroupModel {
    id: number;
    cover: string;
    title: string;
    subTitle: string;
    members: User[];
    progressions: Progression[];
}

const members = Array.from({ length: 100 }, (_, id) => {
    return {
        ...users[0],
        id,
    };
});

const progressions = members.slice(0, 10).map((user) => {
    return {
        user,
        finalTest: 1,
        quizzes: 12,
        productivity: 0.75,
    } as Progression;
});

export const groups: ChallengeGroupModel[] = [
    {
        id: 0,
        cover: 'http://placehold.it/2000x800',
        members,
        progressions,
        title: 'Front End Challengers',
        subTitle: 'Front End Development',
    },
];
