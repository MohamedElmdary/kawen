import * as Props from "./props";

export const defaultData: Props.DefaultProps = {
    field: "Front end development",
    image: "/images/learning_path__aside.png",
    learning_path: {
        Entry: {
            nick_name: "Front end basics",
            progress: 100,
        },
        Intermediate: {
            nick_name: "Welcome to Js",
            progress: 50,
        },
        Advanced: {
            nick_name: "Welcome to Js Frameworks",
            progress: 0,
        },
    },
};

export const learningData: Props.LearningProps = {
    field: "Front end development",
    learning_path: {
        Entry: {
            nick_name: "Front end basics",
            progress: 100,
            courses: [
                {
                    name: "Introduction to HTML",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 100,
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: true,
                        },
                        {
                            name: "Open & closed tags",
                            done: true,
                        },
                        {
                            name: "topic1",
                            done: true,
                        },
                        {
                            name: "topic2",
                            done: true,
                        },
                    ],
                },
                {
                    name: "Introduction to HTML",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 100,
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: true,
                        },
                        {
                            name: "Open & closed tags",
                            done: true,
                        },
                        {
                            name: "topic1",
                            done: true,
                        },
                        {
                            name: "topic2",
                            done: true,
                        },
                    ],
                },
            ],
            project: {
                name: "Entery level project",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                status: "Done",
            },
        },
        Intermediate: {
            nick_name: "Welcome to Js",
            progress: 50,
            courses: [
                {
                    name: "Introduction to Js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 80,
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: true,
                        },
                        {
                            name: "Open & closed tags",
                            done: true,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
                {
                    name: "Introduction to Js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 20,
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: true,
                        },
                        {
                            name: "Main tags",
                            done: true,
                        },
                        {
                            name: "HTML attributes",
                            done: false,
                        },
                        {
                            name: "Open & closed tags",
                            done: false,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
            ],
            project: {
                name: "Intermediate level project",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                status: "not started",
            },
        },
        Advanced: {
            nick_name: "Welcome to Js Frameworks",
            progress: 0,
            courses: [
                {
                    name: "Introduction to react.js",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 0,
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: false,
                        },
                        {
                            name: "Main tags",
                            done: false,
                        },
                        {
                            name: "HTML attributes",
                            done: false,
                        },
                        {
                            name: "Open & closed tags",
                            done: false,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
                {
                    name: "Introduction to React",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    image: "/images/learning_path__logo.svg",
                    progress: 0,
                    checkList: [
                        {
                            name: "What is the HTML?",
                            done: false,
                        },
                        {
                            name: "Main tags",
                            done: false,
                        },
                        {
                            name: "HTML attributes",
                            done: false,
                        },
                        {
                            name: "Open & closed tags",
                            done: false,
                        },
                        {
                            name: "topic1",
                            done: false,
                        },
                        {
                            name: "topic2",
                            done: false,
                        },
                    ],
                },
            ],
            project: {
                name: "Advanced level project",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                status: "not started",
            },
        },
    },
};

export const projectData: Props.ProjectProps = {
    projectName: "Entery level project",
    projectDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
};

export const quizzesData: Props.quizzesProps = {
    progress: 30,
    quizzes: [
        {
            name: "What is the HTML?",
            status: true,
            progress: 100,
        },
        {
            name: "Main tags",
            status: true,
            progress: 50,
        },
        {
            name: "HTML attributes",
            status: false,
        },
        {
            name: "Open & closed tags",
            status: false,
        },
        {
            name: "Topic",
            status: false
        },
    ],
};