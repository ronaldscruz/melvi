import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Types for every App router screen (App routes are: Dashboard, Profile, Roadmaps, etc.).
 * To create a new one, simply add it to DefaultAppNavigationProps list and create a new type:
 *
 * export type ExampleNavigation = StackNavigationProp<
 *  DefaultAppNavigationProps,
 *  'Example'
 * >;
 */

type DefaultAppNavigationProps = {
  Auth: undefined;

  Dashboard: undefined;
};

export type DashboardNavigation = StackNavigationProp<
  DefaultAppNavigationProps,
  'Dashboard'
>;
