import React from 'react';
import { DashboardNavigation } from '../../../types/App';

// Types
import Roadmap from '../../../types/Roadmap';
import User from '../../../types/User';

// Colors & Style
import {
  DashboardWrapper,
  TopContent,
  UserGreeting,
  Welcome,
  RoadmapsTitleWrapper,
  LogoutButton,
  LogoutButtonIcon,
} from './styled';

// Apollo & query stuff
import { useQuery, useApolloClient } from 'react-apollo';
import { ME } from '../../../graphql/queries/User';
import { ROADMAPS } from '../../../graphql/queries/Roadmap';

// Lib Components
import { Avatar } from 'react-native-elements';

// Local Components
import { Title, Text } from '../../../components/Text';
import Header from '../../../components/Display/Header';
import RoundedButtonWithIcon from '../../../components/Buttons/RoundedButtonWithIcon';
import CardWithList from '../../../components/Cards/CardWithList';
import CardEmptyData from '../../../components/Cards/CardEmptyData';
import FullscreenLoading from '../../../components/Loadings/FullscreenLoading';

// Utils
import { removeAuthToken } from '../../../utils/token';
import { getTextInitials } from '../../../utils/user';

type DashboardProps = {
  navigation: DashboardNavigation;
};

/**
 * First "authenticated" app screen
 */
const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const client = useApolloClient();

  const { data: userData, loading: userLoading } = useQuery(ME);
  const me: User = userData?.me;

  const { data: roadmapsData, loading: roadmapsLoading, error: roadmapsError } = useQuery(
    ROADMAPS,
    {
      variables: { userId: +userData?.me?.id },
      pollInterval: 10000,
    },
  );
  const roadmaps: Roadmap[] = roadmapsData?.roadmaps;

  roadmapsError && console.warn(roadmapsError);

  // User session is no more valid
  if (!userLoading && !me?.id) removeAuthToken(client);

  // If anything is loading returns the fullscreeen loading
  if (userLoading || roadmapsLoading) return <FullscreenLoading />;

  const roadmapsListButton = {
    listButton: {
      title: roadmaps?.length > 0 ? 'View more' : null,
      action: roadmaps?.length > 0 ? (): void => navigation.navigate('Roadmaps') : null,
    },
  };

  return (
    <>
      <Header pageTitle="Dashboard" menuAction={navigation.openDrawer} />
      <DashboardWrapper>
        <TopContent>
          <UserGreeting>
            <Avatar
              size={52}
              rounded
              title={me?.fullName ? getTextInitials(me.fullName) : '..'}
            />
            <Welcome>
              <Text> Welcome </Text>
              <Text bold>{me?.fullName} </Text>
            </Welcome>
          </UserGreeting>
          <LogoutButton onPress={(): Promise<boolean> => removeAuthToken(client)}>
            <LogoutButtonIcon name="sign-out-alt" />
          </LogoutButton>
        </TopContent>
        <RoadmapsTitleWrapper>
          <Title> Your roadmaps </Title>
          <RoundedButtonWithIcon
            onPress={(): void => alert('in progress...')}
            iconName="plus"
            size={32}
          />
        </RoadmapsTitleWrapper>
        {roadmaps?.length > 0 ? (
          <CardWithList
            keyExtractor="title"
            listData={roadmaps}
            text="title"
            limit={3}
            {...roadmapsListButton}
          />
        ) : (
          <CardEmptyData
            message="You don't have any roadmap."
            actionButton={{
              title: 'Create one',
              action: (): void => alert('in progress...'),
            }}
          />
        )}
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
