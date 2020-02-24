import React, { useEffect } from 'react';
import { DashboardNavigation } from '../../types/App';

// Colors & Style
import { GREEN_SEA } from '../../constants/colors';
import { DashboardWrapper, UserGreeting, Welcome, RoadmapsTitleWrapper } from './styled';

// Apollo & query stuff
import { useQuery, useApolloClient } from 'react-apollo';
import { ME } from '../../graphql/queries/User';
import { ROADMAPS } from '../../graphql/queries/Roadmap';

// Lib Components
import { Avatar } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

// Local Components
import { Title, Text } from '../../components/Text';
import Header from '../../components/Display/Header';
import RoundedButtonWithIcon from '../../components/Buttons/RoundedButtonWithIcon';
import DefaultButton from '../../components/Buttons/DefaultButton';
import CardWithList from '../../components/Cards/CardWithList';
import FulfillLoading from '../../components/Loadings/FulfillLoading';

// Utils
import { removeAuthToken } from '../../utils/token';
import { getTextInitials } from '../../utils/user';

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
      variables: { userId: 3 },
      pollInterval: 4000,
    },
  );

  roadmapsError && console.warn(roadmapsError);

  if (userLoading || roadmapsLoading) return <FulfillLoading />;

  return (
    <>
      <Header pageTitle="Dashboard" openMenuAction={navigation.openDrawer} />
      <DashboardWrapper>
        <UserGreeting>
          <Avatar
            size={52}
            rounded
            title={
              userData?.me?.fullName ? getTextInitials(userData?.me?.fullName) : '..'
            }
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
          <RoundedButtonWithIcon iconName="plus" size={32} />
        </RoadmapsTitleWrapper>
        {roadmapsData?.roadmaps.length > 0 && (
          <CardWithList
            keyExtractor="title"
            listData={roadmapsData.roadmaps}
            listButton={{ title: 'View more', action: (): void => alert('hey') }}
            text="title"
            limit={3}
          />
        )}
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
