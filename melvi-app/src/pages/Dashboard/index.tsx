import React from 'react';
import { DashboardNavigation } from '../../types/App';

// Colors & Style
import { DashboardWrapper, UserGreeting, Welcome } from './styled';

// Apollo & query stuff
import { useQuery } from 'react-apollo';
import { ME } from '../../graphql/queries/User';
import { ROADMAPS } from '../../graphql/queries/Roadmap';

// Lib Components
import { Avatar } from 'react-native-elements';

// Local Components
import { Title, Text } from '../../components/Text';
import Header from '../../components/Display/Header';

// Utils
import { getTextInitials } from '../../utils/user';
import CardWithList from '../../components/Cards/CardWithList';

type DashboardProps = {
  navigation: DashboardNavigation;
};

/**
 * First "authenticated" app screen
 */
const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const { data: userData } = useQuery(ME);
  const { data: roadmapsData } = useQuery(ROADMAPS, { variables: { userId: 3 } });

  const { me } = userData;
  const { roadmaps } = roadmapsData;

  return (
    <>
      <Header pageTitle="Dashboard" openMenuAction={navigation.openDrawer} />
      <DashboardWrapper>
        <UserGreeting>
          <Avatar size={52} rounded title={getTextInitials(me?.fullName)} />
          <Welcome>
            <Text> Welcome, </Text>
            <Text bold>{me?.fullName} </Text>
          </Welcome>
        </UserGreeting>
        <Title> Your roadmaps </Title>
        <CardWithList keyExtractor="title" listData={roadmaps} text="title" limit={3} />
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
