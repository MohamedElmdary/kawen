interface LearnPath {
    id: number;
    title: string;
    description: string;
    progress: number;
    image: string;
}

interface Experience {
    gained: number;
    total: number;
}

interface Medal {
    title: string;
    image: string;
}

interface Productivity {
    date: number;
    quizzes: number;
    finalTest: number;
}

interface Certification {
    title: string;
    image: string;
}

interface Contact {
    id: string /* related User Id */;
    image: string;
    title: string /* user name */;
}

interface Challenge extends Contact {
    subTitle: string;
}

export interface User {
    id: number;
    name: string;
    learnPaths: LearnPath[];
    level: number;
    experience: Experience;
    medals: Medal[];
    productivities: Productivity[];
    certifications: Certification[];
    cover: string;
    image: string;
    contacts: Contact[];
    challenges: Challenge[];
}

export interface AuthState {
    currentUser: User | null;
}

interface SetCurrentUser {
    type: '[Auth] SET_CURRENT_USER';
    payload: User | null;
}

export type AuthActions = SetCurrentUser;
