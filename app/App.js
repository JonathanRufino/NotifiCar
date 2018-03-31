import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform, AsyncStorage, AppState, Alert } from 'react-native';
import FCM, {
    FCMEvent, 
    RemoteNotificationResult,
    WillPresentNotificationResult, 
    NotificationType,
} from 'react-native-fcm';
import { Actions } from 'react-native-router-flux';

import Routes from './routes/index';
import reduxStore from './redux/store';

registerKilledListener();

class App extends Component {
    componentDidMount() {
        FCM.requestPermissions()
            .then(() => {
                console.log('notification permission garanted');
                registerAppListener();
            })
            .catch(() => console.log('notification permission rejected'));
    }

    render() {
        return (
            <Provider store={reduxStore}>
                <Routes /> 
            </Provider>
        );
    }
}

export default App;

// these callback will be triggered even when app is killed
function registerKilledListener() {
    FCM.on(FCMEvent.Notification, notif => {
        AsyncStorage.setItem('lastNotification', JSON.stringify(notif));

        FCM.presentLocalNotification({
            title: Platform.OS === 'ios' ? notif.aps.alert.title : notif.fcm.title,
            body: Platform.OS === 'ios' ? notif.aps.alert.body : notif.fcm.body,
            sound: 'default',
            priority: 'high',
            vibrate: 300,
            wake_screen: true,
            show_in_foreground: true,
            click_action: 'com.jldevs.notificar', // for ios
        });

        if (notif.opened_from_tray) {
            setTimeout(() => {
                if (notif._actionIdentifier === 'reply') {
                    if (AppState.currentState !== 'background') {
                        // Alert.alert(`User replied ${JSON.stringify(notif._userText)}`);
                        Alert.alert('User replied');
                    } else {
                        AsyncStorage.setItem('lastMessage', JSON.stringify(notif._userText));
                    }
                }
                if (notif._actionIdentifier === 'view') {
                    Alert.alert('User clicked View in App');
                }
                if (notif._actionIdentifier === 'dismiss') {
                    Alert.alert('User clicked Dismiss');
                }
            }, 1000);
        }
    });
}

// these callback will be triggered only when app is foreground or background
function registerAppListener() {
    FCM.on(FCMEvent.Notification, notif => {
        FCM.presentLocalNotification({
            title: Platform.OS === 'ios' ? notif.aps.alert.title : notif.fcm.title,
            body: Platform.OS === 'ios' ? notif.aps.alert.body : notif.fcm.body,
            sound: 'default',
            priority: 'high',
            vibrate: 300,
            wake_screen: true,
            show_in_foreground: true,
            click_action: 'com.jldevs.notificar', // for ios
        });

        if (Platform.OS === 'ios'
                && notif._notificationType === NotificationType.WillPresent
                && !notif.local_notification) {
            // this notification is only to decide if you want to 
            // show the notification when user if in foreground.
            // usually you can ignore it. just decide to show or not.
            notif.finish(WillPresentNotificationResult.All);
            return;
        }
  
        if (notif.opened_from_tray) {
            if (notif.targetScreen === 'detail') {
                setTimeout(() => {
                    Actions.login();
                }, 500);
            }
            setTimeout(() => {
                // Alert.alert(`User tapped notification\n${JSON.stringify(notif)}`);
                Actions.login();
            }, 500);
        }
  
        if (Platform.OS === 'ios') {
            //optional
            //iOS requires developers
            //to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
            //This library handles 
            // it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
            //notif._notificationType is available for iOS platfrom
            switch (notif._notificationType) {
                case NotificationType.Remote:
                    notif.finish(RemoteNotificationResult.NewData); //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                    break;
                case NotificationType.NotificationResponse:
                    notif.finish();
                    break;
                case NotificationType.WillPresent:
                    notif.finish(WillPresentNotificationResult.All); //other types available: WillPresentNotificationResult.None
                    // this type of notificaiton will be called only when you are in foreground.
                    // if it is a remote notification, don't do any app logic here. Another notification callback will be triggered with type NotificationType.Remote
                    break;
                default:
                    break;
            }
        }
    });
}
