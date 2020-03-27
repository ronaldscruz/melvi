import React from 'react';

// Styles
import { RoadmapsPage, RoadmapsTitle } from './styled';

// Types
import { RoadmapsNavigation } from '../../../types/App';
import User from '../../../types/User';
import Roadmap from '../../../types/Roadmap';

// Apollo & Queries
import { useQuery } from 'react-apollo';
import { ROADMAPS } from '../../../graphql/queries/Roadmap';
import { ME } from '../../../graphql/queries/User';

// RN Components
import { ScrollView } from 'react-native';

// Lib Components
import { ListItem } from 'react-native-elements';

// Local components
import Header from '../../../components/Display/Header';
import { getTextInitials } from '../../../utils/user';

type RoadmapsProps = {
  navigation: RoadmapsNavigation;
};

const Roadmaps: React.FC<RoadmapsProps> = ({ navigation }) => {
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

  return (
    <>
      <Header
        pageTitle="Roadmaps"
        main={false}
        menuAction={(): void => navigation.goBack()}
      />
      <RoadmapsPage>
        <RoadmapsTitle>Your roadmaps</RoadmapsTitle>
        <ScrollView>
          {roadmaps.length > 0 &&
            roadmaps.map(roadmap => (
              <ListItem
                key={roadmap.id}
                leftAvatar={{ title: getTextInitials(roadmap.title) }}
                title={roadmap.title}
                subtitle={roadmap.description}
              />
            ))}
        </ScrollView>
      </RoadmapsPage>
    </>
  );
};

export default Roadmaps;