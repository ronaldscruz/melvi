import React from 'react';
import { Card, ListItem, ItemText, ListButtonWrapper } from './styled';

// Local Components
import DefaultButton from '../../Buttons/DefaultButton';

// Lib components
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

interface ListButton {
  title: string;
  action: Function;
}

type CardWithListProps = {
  listData: Array<any>;
  keyExtractor: string;
  text: string;
  limit: number;
  listButton?: ListButton;
  onCardPress?: Function;
  dark?: boolean;
};

/**
 * A card with an array of items inside
 * @param listData Array containing data to be listed
 * @param keyExtractor Which property from the objects inside array will be considered as a key?
 * @param text Which property from the objects inside array will be the title of list item?
 * @param limit List size limit
 * @param listButton If passed, CardWithList will display a button below the list
 * @param onCardPress If passed, executes an action when card is pressed
 * @param dark Dark theme
 */
const CardWithList: React.FC<CardWithListProps> = ({
  listData,
  keyExtractor,
  text,
  limit,
  listButton,
  onCardPress,
  dark = true,
}) => {
  const selectedListData = limit ? listData.slice(0, limit) : listData;

  return (
    <TouchableOpacity onPress={() => onCardPress() || {}}>
      <Card dark={dark}>
        {selectedListData.map(item => (
          <ListItem key={item[keyExtractor]}>
            <Avatar rounded size={32} title={item[text].split('').shift()} />
            <ItemText> {item[text]} </ItemText>
          </ListItem>
        ))}
      </Card>
      {listButton?.title && (
        <ListButtonWrapper>
          <DefaultButton
            gapTop
            title={listButton.title}
            onPress={(): void => listButton.action()}
          />
        </ListButtonWrapper>
      )}
    </TouchableOpacity>
  );
};

export default CardWithList;
