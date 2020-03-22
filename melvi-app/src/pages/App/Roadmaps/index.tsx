import React from 'react';

// Types
import { RoadmapsNavigation } from '../../../types/App';
import { Title } from '../../../components/Text';

type RoadmapsProps = {
  navigation: RoadmapsNavigation;
};

const Roadmaps: React.FC<RoadmapsProps> = () => {
  return <Title>HELLO, WORLD!</Title>;
};
