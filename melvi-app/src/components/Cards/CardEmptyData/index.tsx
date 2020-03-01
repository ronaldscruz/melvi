import React from 'react';
import { Card, AlertWrapper, AlertIcon, ActionButtonWrapper } from './styled';

// Local Components
import DefaultButton from '../../Buttons/DefaultButton';
import { Text } from '../../Text';

interface ActionButton {
  title: string;
  action: Function;
}

type CardEmptyDataProps = {
  iconName?: string;
  message?: string;
  actionButton?: ActionButton;
  dark?: boolean;
};

/**
 * A card with an "empty" alert inside id
 * @param iconName Icon displayed inside the alert
 * @param message Message displayed below the icon
 * @param actionButton If passed, CardEmptyData will display a button below the alert icon
 * @param dark Dark theme
 */
const CardEmptyData: React.FC<CardEmptyDataProps> = ({
  iconName = 'folder-open',
  message = 'There is nothing to be displayed.',
  actionButton,
  dark = true,
}) => {
  return (
    <Card dark={dark}>
      <AlertWrapper>
        <AlertIcon name={iconName} />
        <Text bold> {message} </Text>
      </AlertWrapper>
      {actionButton && (
        <ActionButtonWrapper>
          <DefaultButton
            gapTop
            title={actionButton.title}
            onPress={(): void => actionButton.action()}
          />
        </ActionButtonWrapper>
      )}
    </Card>
  );
};

export default CardEmptyData;
