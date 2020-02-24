import React from 'react';
import { Card, ListItem, ItemText, ListButtonWrapper } from './styled';

// Local Components
import DefaultButton from '../../Buttons/DefaultButton';

// Lib components
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
  dark?: boolean;
};

/**
 * A card with an array of items inside
 * @param listData Array containing data to be listed
 * @param keyExtractor Which property from the objects inside array will be considered as a key?
 * @param text Which property from the objects inside array will be the title of list item?
 * @param limit List size limit
 * @param listButton If passed, CardWithList will display a button below the list
 * @param dark Dark theme
 */
const CardWithList: React.FC<CardWithListProps> = ({
  listData,
  keyExtractor,
  text,
  limit,
  listButton,
  dark = true,
}) => {
  const selectedListData = limit ? listData.slice(0, limit) : listData;

  return (
    <>
      <Card dark={dark}>
        {selectedListData.map(item => (
          <ListItem key={item[keyExtractor]}>
            <Avatar rounded size={32} title={item[text].split('').shift()} />
            <ItemText> {item[text]} </ItemText>
          </ListItem>
        ))}
      </Card>
      {listButton && (
        <ListButtonWrapper>
          <DefaultButton
            gapTop
            title={listButton.title}
            onPress={(): void => listButton.action()}
          />
        </ListButtonWrapper>
      )}
    </>
  );
};

export default CardWithList;
