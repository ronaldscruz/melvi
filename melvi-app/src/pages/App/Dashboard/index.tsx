import React from 'react';
import { DashboardNavigation } from '../../../types/App';

// Colors & Style
import { GREEN_SEA } from '../../../constants/colors';
import { DashboardWrapper, UserGreeting, Welcome, RoadmapsTitleWrapper } from './styled';

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
import DefaultButton from '../../../components/Buttons/DefaultButton';
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
  const { data: roadmapsData, loading: roadmapsLoading, error: roadmapsError } = useQuery(
    ROADMAPS,
    {
      variables: { userId: +userData?.me?.id },
      pollInterval: 3600,
    },
  );

  roadmapsError && console.warn(roadmapsError);

  // User session is no more valid
  if (!userLoading && !userData?.me?.id) removeAuthToken(client);

  // If anything is loading returns the fullscreeen loading
  if (userLoading || roadmapsLoading) return <FullscreenLoading />;

  const roadmapsListLength = roadmapsData?.roadmaps?.length;

  const roadmapsListButton = {
    listButton: {
      title: roadmapsListLength >= 3 ? 'View more' : 'Create roadmap',
      action:
        roadmapsListLength >= 3
          ? (): void => alert('View more...')
          : (): void => alert('Create roadmap...'),
    },
  };

  return (
    <>
      <Header pageTitle="Dashboard" openMenuAction={navigation.openDrawer} />
      <DashboardWrapper>
        <UserGreeting>
          <Avatar
            size={52}
            rounded
            title={userData?.me?.fullName ? getTextInitials(userData.me.fullName) : '..'}
          />
          <Welcome>
            <Text> Welcome, </Text>
            <Text bold>{userData?.me?.fullName} </Text>
          </Welcome>
        </UserGreeting>
        {/* <DefaultButton
          title="Logout"
          gapTop={true}
          fulfill={false}
          onPress={(): Promise<boolean> => removeAuthToken(client)}
        /> */}
        <RoadmapsTitleWrapper>
          <Title> Your roadmaps </Title>
          <RoundedButtonWithIcon
            onPress={(): void => alert('in progress...')}
            iconName="plus"
            size={32}
          />
        </RoadmapsTitleWrapper>
        {roadmapsListLength > 0 ? (
          <CardWithList
            keyExtractor="title"
            listData={roadmapsData.roadmaps}
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
