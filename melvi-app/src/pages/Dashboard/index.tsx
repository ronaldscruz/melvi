import React from 'react';
import { DashboardNavigation } from '../../types/App';

// Colors & Style

// Apollo & query stuff
import { useQuery, useApolloClient } from 'react-apollo';
import { ME } from '../../graphql/queries/User';
import { ROADMAPS } from '../../graphql/queries/Roadmap';

// Lib Components
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, ListItem } from 'react-native-elements';

// Local Components
import { Title, Text } from '../../components/Text';
import Header from '../../components/Display/Header';
import DefaultButton from '../../components/Buttons/DefaultButton';

// Utils
import { removeAuthToken } from '../../utils/token';

type DashboardProps = {
  navigation: DashboardNavigation;
};

/**
 * First "authenticated" app screen
 */
const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const client = useApolloClient();

  const { loading: userLoading, error: userError, data: userData } = useQuery(ME);
  const {
    loading: roadmapsLoading,
    error: roadmapsError,
    data: roadmapsData,
  } = useQuery(ROADMAPS, { variables: { userId: 3 } });

  roadmapsError && console.warn(roadmapsError);
  roadmapsData && console.log(roadmapsData);

  return (
    <SafeAreaView>
      <Header pageTitle="Dashboard" openMenuAction={navigation.openDrawer} />
      <Text> Logged as: {userData?.me?.fullName} </Text>
      <DefaultButton
        title="Logout"
        gapTop={true}
        fulfill={false}
        onPress={() => removeAuthToken(client)}
      />
      <Title> Your roadmaps </Title>
      {roadmapsData?.roadmaps?.length > 0 && (
        <Card>
          {roadmapsData.roadmaps.map(roadmap => (
            <ListItem key={roadmap.user.fullName} title={roadmap.title} />
          ))}
        </Card>
      )}
    </SafeAreaView>
  );
};

export default Dashboard;
