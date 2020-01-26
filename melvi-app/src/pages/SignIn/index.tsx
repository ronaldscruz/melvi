import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';

import { MIDNIGHT_BLUE } from '../../constants/colors';

import CenteredContentView from '../../components/CenteredContentView';
import FormInput from '../../components/FormInput';
import SubmitButton from '../../components/SubmitButton';
import Logo from '../../components/Logo';

const SIGN_IN = gql`
  query SignIn($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signIn,
    { called: requestedSignIn, loading: signInLoading, error: signInError, data: token },
  ] = useLazyQuery(SIGN_IN);

  if (requestedSignIn && signInLoading) console.log('SIGN IN:', email, password);
  if (signInError) console.log('ERROR SIGNING IN:', signInError);
  if (token) console.log(token);

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
        disabled={requestedSignIn && signInLoading}
        loading={requestedSignIn && signInLoading}
        onPress={(): void => signIn({ variables: { email, password } })}
      />
    </CenteredContentView>
  );
};

export default SignIn;
