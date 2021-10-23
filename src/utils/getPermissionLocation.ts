import { Alert } from 'react-native';

import * as Location from 'expo-location';

export default async function getPermissionLocation() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission to access location was denied.');
  }
}
