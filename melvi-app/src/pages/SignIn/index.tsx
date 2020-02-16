import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

// Types
import { SignInNavigation } from '../../types/Auth';

// Constants
import { MIDNIGHT_BLUE } from '../../constants/colors';

// GraphQL
import { useLazyQuery, useApolloClient } from '@apollo/react-hooks';
import { SIGN_IN } from '../../graphql/queries/User';

// Local components
import CenteredContentView from '../../components/CenteredContentView';
import FormInput from '../../components/FormInput';
import SubmitButton from '../../components/SubmitButton';
import Logo from '../../components/Logo';

type SignInProps = {
  navigation: SignInNavigation;
};

/**
 * Initial sign in page
 */
const SignIn: React.FC<SignInProps> = props => {
  const client = useApolloClient();

  const [email, setEmail] = useState('ronald@email.com');
  const [password, setPassword] = useState('123456');

  const [
    signIn,
    { loading: signInLoading, error: signInError, data: signInData },
  ] = useLazyQuery(SIGN_IN);

  // TODO: handle login errors
  if (signInError) console.warn(signInError);

  if (signInData) {
    AsyncStorage.setItem('token', signInData.login.token).then(() => {
      client.writeData({ data: { token: signInData.login.token } });
    });
  }

  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <Logo size="medium" />
      <FormInput
        placeholder="E-mail"
        autoCapitalize="none"
        iconName="envelope"
        gapBottom={true}
        onChangeText={(e: string): void => setEmail(e)}
        value={email}
      />
      <FormInput
        placeholder="Password"
        iconName="key"
        password
        onChangeText={(p: string): void => setPassword(p)}
        value={password}
      />
      <SubmitButton
        title="Sign in"
        iconName="chevron-right"
        gapTop
        fulfill
        disabled={signInLoading}
        loading={signInLoading}
        onPress={(): void => {
          signIn({
            variables: { email, password },
          });
        }}
      />
    </CenteredContentView>
  );
};

export default SignIn;
