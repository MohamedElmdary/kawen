import React from 'react';
import Layout from '../../components/layout';
import classes from './challengeGroup.module.scss';
import { GetServerSideProps } from 'next';
import { ChallengeGroupModel, groups } from '../../data/groups';
import GroupHeader from '../../components/group/groupHeader';
import GroupMembers from '../../components/group/groupMembers';
import GroupProgression from '../../components/group/groupProgression';

interface Props {
    group: ChallengeGroupModel;
}

const ChallengeGroup: React.FC<Props> = ({ group }) => {
    const { cover, title, subTitle, members, progressions } = group;
    return (
        <Layout title="Kawen | Challenge-Group">
            <section className={classes.group}>
                <GroupHeader {...{ cover, title, subTitle }} />
                <GroupMembers {...{ members }} />
                <GroupProgression {...{ progressions }} />
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            group: groups[0],
        },
    };
};

export default ChallengeGroup;
