import { Constants } from 'react-native-unimodules';
import * as Notifications from 'expo-notifications';

export default function getDeviceToken() {
  if (!Constants.isDevice) {
    return Promise.reject('Must use physical device for Push Notifications');
  }

  try {
    return Notifications.getPermissionsAsync()
      .then((statusResult) => {
          return statusResult.status !== 'granted'
              ? Notifications.requestPermissionsAsync()
              : statusResult;
      })
      .then((statusResult) => {
          if (statusResult.status !== 'granted') {
              throw 'Failed to get push token for push notification!';
          }
          return Notifications.getExpoPushTokenAsync();
      })
      .then((tokenData) => tokenData.data);
  } catch (error) {
    return Promise.reject("Couldn't check notifications permissions");
  }
};