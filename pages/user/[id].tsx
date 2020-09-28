import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
// import { GetServerSideProps } from 'next';

const UserProfile: React.FC = () => {
    const router = useRouter();

    return (
        <Layout title="kawen | User Profile">
            <div>
                <p>user Id -{router.query.id}</p>
            </div>
        </Layout>
    );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             user: {
//                 id: 0,
//                 name: 'Hassan M.Elmansy',
//                 cover: 'http://placehold.it/2000x800',
//                 image: 'http://placehold.it/300x300',
//                 level: 3,
//                 experience: {
//                     reached: 65,
//                     total: 130
//                 },

//             }
//         }
//     }
// };

export default UserProfile;
