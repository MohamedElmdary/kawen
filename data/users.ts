import { User } from '../store/auth';

const users: User[] = [
    {
        id: 0,
        name: 'Hassan M. Elmansy',
        cover: 'http://placehold.it/2000x800',
        image: 'http://placehold.it/400x400',
        level: 3,
        experience: {
            gained: 65,
            total: 130,
        },
        learnPaths: [
            {
                id: 0,
                title: 'Front End Development',
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero consequatur animi voluptatibus? Ullam quia tempore officia suscipit labore a perspiciatis ea harum excepturi sint. Nihil tempore ab sit dolore obcaecati porro rerum, recusandae illum modi inventore placeat? Illo quidem, cupiditate, enim sint dolorum eos quae consectetur adipisci, obcaecati similique eius maxime necessitatibus dolor eveniet blanditiis atque omnis vero sunt velit nemo voluptates ut. `,
                image: 'http://placehold.it/300x250',
                progress: 0.8,
            },
        ],
        certifications: [
            {
                title: 'Front End Development Track',
                image: 'http://placehold.it/30x30',
            },
        ],
        productivities: [
            {
                date: new Date(2020, 8, 5).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
            {
                date: new Date(2020, 8, 19).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
            {
                date: new Date(2020, 8, 5).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
            {
                date: new Date(2020, 8, 13).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
            {
                date: new Date(2020, 8, 16).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
            {
                date: new Date(2020, 8, 14).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
            {
                date: new Date(2020, 8, 18).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
        ],
        medals: [
            {
                title: 'Awesome 1',
                image: 'http://placehold.it/50x50',
            },
            {
                title: 'Awesome 2',
                image: 'http://placehold.it/50x50',
            },
            {
                title: 'Awesome 3',
                image: 'http://placehold.it/50x50',
            },
        ],
    },
    {
        id: 1,
        name: 'Mohamed Elmdary',
        cover: 'http://placehold.it/2000x800',
        image: 'http://placehold.it/400x400',
        level: 7,
        experience: {
            gained: 1950,
            total: 2650,
        },
        learnPaths: [
            {
                id: 0,
                title: 'Front End Development',
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero consequatur animi voluptatibus? Ullam quia tempore officia suscipit labore a perspiciatis ea harum excepturi sint. Nihil tempore ab sit dolore obcaecati porro rerum, recusandae illum modi inventore placeat? Illo quidem, cupiditate, enim sint dolorum eos quae consectetur adipisci, obcaecati similique eius maxime necessitatibus dolor eveniet blanditiis atque omnis vero sunt velit nemo voluptates ut. Facere saepe porro harum cumque quia, molestias officiis, at in illo corrupti doloribus tempora est consequuntur iste incidunt a autem beatae officia accusantium error nobis non itaque. Libero nesciunt fugit similique laboriosam iure, aspernatur nihil. Beatae!`,
                image: 'http://placehold.it/300x250',
                progress: 1,
            },
            {
                id: 1,
                title: 'Back End Development',
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero consequatur animi voluptatibus? Ullam quia tempore officia suscipit labore a perspiciatis ea harum excepturi sint. Nihil tempore ab sit dolore obcaecati porro rerum, recusandae illum modi inventore placeat? Illo quidem, cupiditate, enim sint dolorum eos quae consectetur adipisci, obcaecati similique eius maxime necessitatibus dolor eveniet blanditiis atque omnis vero sunt velit nemo voluptates ut. Facere saepe porro harum cumque quia, molestias officiis, at in illo corrupti doloribus tempora est consequuntur iste incidunt a autem beatae officia accusantium error nobis non itaque. Libero nesciunt fugit similique laboriosam iure, aspernatur nihil. Beatae!`,
                image: 'http://placehold.it/300x250',
                progress: 0.7,
            },
            {
                id: 2,
                title: 'AI/ML Development',
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero consequatur animi voluptatibus? Ullam quia tempore officia suscipit labore a perspiciatis ea harum excepturi sint. Nihil tempore ab sit dolore obcaecati porro rerum, recusandae illum modi inventore placeat? Illo quidem, cupiditate, enim sint dolorum eos quae consectetur adipisci, obcaecati similique eius maxime necessitatibus dolor eveniet blanditiis atque omnis vero sunt velit nemo voluptates ut. Facere saepe porro harum cumque quia, molestias officiis, at in illo corrupti doloribus tempora est consequuntur iste incidunt a autem beatae officia accusantium error nobis non itaque. Libero nesciunt fugit similique laboriosam iure, aspernatur nihil. Beatae!`,
                image: 'http://placehold.it/300x250',
                progress: 0.6,
            },
        ],
        certifications: [
            {
                title: 'Front End Development Track',
                image: 'http://placehold.it/30x30',
            },
        ],
        productivities: [
            {
                date: new Date(2020, 8, 18).getTime(),
                finalTest: 1,
                quizzes: 6,
            },
        ],
        medals: [
            {
                title: 'Awesome 1',
                image: 'http://placehold.it/50x50',
            },
            {
                title: 'Awesome 2',
                image: 'http://placehold.it/50x50',
            },
            {
                title: 'Awesome 3',
                image: 'http://placehold.it/50x50',
            },
        ],
    },
];

export default users;
