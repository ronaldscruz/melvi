import React from 'react';

import { Card, ListItem, ItemText } from './styled';

type CardWithListProps = {
  listData: Array<any>;
  keyExtractor: string;
  text: string;
  limit: number;
  viewMore?: boolean;
  dark?: boolean;
};

/**
 * A card with an array of items inside
 * @param listData Array containing data to be listed
 * @param keyExtractor Which property from the objects inside array will be considered as a key?
 * @param text Which property from the objects inside array will be the title of list item?
 * @param limit List size limit
 * @param viewMore Should the component display a "View more" button below the card?
 * @param dark Dark theme
 */
const CardWithList: React.FC<CardWithListProps> = ({
  listData,
  keyExtractor,
  text,
  limit,
  viewMore = true,
  dark = true,
}) => {
  const selectedListData = limit ? listData.slice(0, limit) : listData;

  return (
    <>
      <Card dark={dark}>
        {selectedListData.map(item => (
          <ListItem key={item[keyExtractor]}>
            <ItemText> {item[text]} </ItemText>
          </ListItem>
        ))}
      </Card>
    </>
  );
};

export default CardWithList;
