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
