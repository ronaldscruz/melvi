import React, { useState } from 'react';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import { AsyncStorage } from 'react-native';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

import { MIDNIGHT_BLUE } from '../../constants/colors';

import CenteredContentView from '../../components/CenteredContentView';
import FormInput from '../../components/FormInput';
import SubmitButton from '../../components/SubmitButton';
import Logo from '../../components/Logo';

type SignInProps = {
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
};

const SIGN_IN = gql`
  query SignIn($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const SignIn: React.FC<SignInProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signIn,
    { loading: signInLoading, error: signInError, data: token },
  ] = useLazyQuery(SIGN_IN);

  if (signInError) console.log(signInError);

  if (token) {
    AsyncStorage.setItem('token', token.login).then(() =>
      props.navigation.navigate('App'),
    );
  }

  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <Logo size="medium" />
      <FormInput
        placeholder="E-mail"
        iconName="envelope"
        gapBottom={true}
        onChangeText={(e: string): void => setEmail(e)}
      />
      <FormInput
        placeholder="Password"
        iconName="key"
        password
        onChangeText={(p: string): void => setPassword(p)}
      />
      <SubmitButton
        title="Sign in"
        iconName="chevron-right"
        gapTop
        fulfill
        disabled={signInLoading}
        loading={signInLoading}
        onPress={(): void => signIn({ variables: { email, password } })}
      />
    </CenteredContentView>
  );
};

export default SignIn;
