import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

// Types
import { SignInNavigation } from '../../../types/Auth';

// Constants
import { MIDNIGHT_BLUE } from '../../../constants/colors';

// GraphQL
import { useLazyQuery, useApolloClient } from '@apollo/react-hooks';
import { SIGN_IN } from '../../../graphql/queries/User';

// Local components
import CenteredContentView from '../../../components/Display/CenteredContentView';
import Input from '../../../components/Form/Input';
import DefaultButton from '../../../components/Buttons/DefaultButton';
import Logo from '../../../components/Display/Logo';

type SignInProps = {
  navigation: SignInNavigation;
};

/**
 * Initial sign in page
 */
const SignIn: React.FC<SignInProps> = () => {
  const client = useApolloClient();

  const [email, setEmail] = useState('giorno@email.com');
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
      <Input
        placeholder="Email"
        autoCapitalize="none"
        iconLeft="envelope"
        onChangeText={(e: string): void => setEmail(e)}
        value={email}
      />
      <Input
        placeholder="Password"
        iconLeft="key"
        password={true}
        secureTextEntry={true}
        onChangeText={(p: string): void => setPassword(p)}
        value={password}
      />
      <DefaultButton
        title="Sign in"
        iconName="chevron-right"
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
