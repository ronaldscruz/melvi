import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Types for every Auth router screen. To create a new one, simply add it to
 * DefaultAuthNavigationProps list and create a new type:
 *
 * export type ExampleNavigation = StackNavigationProp<
 *  DefaultAuthNavigationProps,
 *  'Example'
 * >;
 */

type DefaultAuthNavigationProps = {
  App: undefined;

  Loading: undefined;
  SignIn: undefined;
};

export type LoadingNavigation = StackNavigationProp<
  DefaultAuthNavigationProps,
  'Loading'
>;

export type SignInNavigation = StackNavigationProp<DefaultAuthNavigationProps, 'SignIn'>;
