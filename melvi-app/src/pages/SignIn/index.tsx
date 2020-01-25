import React from 'react';
import { MIDNIGHT_BLUE } from '../../constants/colors';

import CenteredContentView from '../../components/CenteredContentView';
import FormInput from '../../components/FormInput';
import SubmitButton from '../../components/SubmitButton';

const SignIn: React.FC = () => {
  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <FormInput placeholder="E-mail" iconName="envelope" gapBottom={true} />
      <FormInput placeholder="Password" iconName="key" secureTextEntry={true} />
      <SubmitButton title="Sign in" iconName="chevron-right" gapTop fulfill />
    </CenteredContentView>
  );
};

export default SignIn;
