import React, {useEffect, useRef, useState, createContext, useContext } from 'react';
import * as Notifications from 'expo-notifications';

import { Subscription } from '@unimodules/react-native-adapter';

import getDeviceToken from '../utils/getDeviceToken';
import { Platform } from 'react-native';

interface NotificationContextData {
  deviceToken: String | undefined;
  notification: boolean | Notifications.Notification;
}

const NotificationContext = createContext<NotificationContextData>({} as NotificationContextData)

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const NotificationProvider: React.FC = ({ children }) => {
  const [expoPushToken, setExpoPushToken] = useState<String | undefined>('');
  // const [isSubscribed, setIsSubscribed] = useState(false);
  const [notification, setNotification] = useState<boolean | Notifications.Notification>(false);
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {

    

    getDeviceToken().then(async (pushToken) => {
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          showBadge: true,
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FE9018',
          sound: '../../assets/sounds/notification-1.wav'
        });
      }
      
      console.log('Push token: ' + pushToken);
      setExpoPushToken(pushToken);
      // if (pushToken) {
      //   retrieveWeatherSubscription(pushToken, setIsSubscribed);
      // }
    });

    // registerForPushNotificationsAsync().then(token =>
    //   setExpoPushToken(token)
    // );

    notificationListener.current = Notifications.addNotificationReceivedListener(setNotification);

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        setNotification(response.notification);
      }
    );
    
    return () => {
      notificationListener.current &&
          Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
          Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ deviceToken: expoPushToken, notification }}>
      {children}
    </NotificationContext.Provider>
  )
}

// Hook próprio
export function useNotification(): NotificationContextData {
  const context = useContext(NotificationContext)

  return context
}


