export interface Icourse {
    name: string;
    description: string;
    image: string;
    checkList: {
        name: string;
        done: boolean;
    }[];
}

export const calculateProgression = (course: Icourse): number => {
    const itemsDone: number = course.checkList.filter((item) => item.done)
        .length;
    const totalItems = course.checkList.length;
    return Math.floor((itemsDone / totalItems) * 100);
};

// export const calculateTotalProgression = (
//     courses: Icourse[],
//     project
// ): number => {

//     return 0;
// };
