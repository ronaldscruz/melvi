import { AsyncStorage } from 'react-native';

/**
 * Get token from AsyncStorage
 */
export async function getAuthToken(): Promise<string> {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (err) {
    console.error('Failed retrieving token from AsyncStorage.');
    return;
  }
}

/**
 * Removes token from storage and clears Apollo Client cache
 */
export async function removeAuthToken(client): Promise<boolean> {
  try {
    await Promise.all([client.resetStore(), AsyncStorage.removeItem('token')]);
    return true;
  } catch (err) {
    console.error('Failed clearing token:', err);
    return false;
  }
}
