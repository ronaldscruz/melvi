import React, { useState } from 'react';
import { MIDNIGHT_BLUE } from '../../constants/colors';

import CenteredContentView from '../../components/CenteredContentView';
import FormInput from '../../components/FormInput';
import SubmitButton from '../../components/SubmitButton';
import Logo from '../../components/Logo';

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <Logo size="medium" />
      <FormInput placeholder="E-mail" iconName="envelope" gapBottom={true} />
      <FormInput placeholder="Password" iconName="key" password />
      <SubmitButton
        title="Sign in"
        iconName="chevron-right"
        gapTop
        fulfill
        disabled={loading}
        loading={loading}
        onPress={(): void => setLoading(!loading)}
      />
    </CenteredContentView>
  );
};

export default SignIn;
