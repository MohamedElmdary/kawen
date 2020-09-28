import React from 'react';
import { Provider } from 'react-redux';
import useStore from '../../store';
import './_app.scss';
import { User } from '../../store/auth';

interface Props {
    Component: React.FC<any>;
    pageProps: { [key: string]: any };
    currentUser: User | null;
}

const App: React.FC<Props> = ({ Component, pageProps, currentUser }) => {
    const store = useStore({ auth: { currentUser } });

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

(App as any).getInitialProps = async (/* ctx: any */) => {
    // fetch real user from backend here
    // id = ctx.query.id
    const currentUser: User = {
        id: 0,
        name: 'Hassan M. Elmansy',
        level: 3,
        experience: {
            gained: 65,
            total: 130,
        },
        learnPaths: [
            {
                id: 0,
                title: 'Front End Development',
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero consequatur animi voluptatibus? Ullam quia tempore officia suscipit labore a perspiciatis ea harum excepturi sint. Nihil tempore ab sit dolore obcaecati porro rerum, recusandae illum modi inventore placeat? Illo quidem, cupiditate, enim sint dolorum eos quae consectetur adipisci, obcaecati similique eius maxime necessitatibus dolor eveniet blanditiis atque omnis vero sunt velit nemo voluptates ut. Facere saepe porro harum cumque quia, molestias officiis, at in illo corrupti doloribus tempora est consequuntur iste incidunt a autem beatae officia accusantium error nobis non itaque. Libero nesciunt fugit similique laboriosam iure, aspernatur nihil. Beatae!`,
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
                date: new Date(),
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
    };

    return { currentUser };
};

export default App;
