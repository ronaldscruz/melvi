import { DrawerNavigationProp } from '@react-navigation/drawer';

/**
 * Types for every App router screen (App routes are: Dashboard, Profile, Roadmaps, etc.).
 * To create a new one, simply add it to DefaultAppNavigationProps list and create a new type:
 *
 * export type ExampleNavigation = DrawerNavigationProp<
 *  DefaultAppNavigationProps,
 *  'Example'
 * >;
 */

type DefaultAppNavigationProps = {
  Dashboard: undefined;
};

export type DashboardNavigation = DrawerNavigationProp<
  DefaultAppNavigationProps,
  'Dashboard'
>;
