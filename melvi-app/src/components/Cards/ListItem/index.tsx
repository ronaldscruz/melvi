import React from 'react';
import {
  ListItemWrapper,
  TouchableCardArea,
  ContentWithoutArrow,
  TitleAndDescription,
  CornerArrow,
} from './styled';

// Lib components
import { Avatar } from 'react-native-elements';

// Utils
import { getTextInitials } from '../../../utils/user';
import { Text, MutedText } from '../../Text';

type ListItemProps = {
  title: string;
  description?: string;
  iconTitle?: boolean;
  onPress?: Function;
};

const ListItem: React.FC<ListItemProps> = ({ title, description, iconTitle }) => {
  return (
    <ListItemWrapper>
      <TouchableCardArea>
        <ContentWithoutArrow>
          {iconTitle && <Avatar rounded title={getTextInitials(title)} />}
          <TitleAndDescription>
            <Text>{title}</Text>
            {description && <MutedText>{description}</MutedText>}
          </TitleAndDescription>
        </ContentWithoutArrow>
        <CornerArrow name="chevron-right" />
      </TouchableCardArea>
    </ListItemWrapper>
  );
};

export default ListItem;
