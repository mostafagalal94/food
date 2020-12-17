import React, { Component } from 'react'
import Router from './Router';
import { Root } from 'native-base';
import messaging from '@react-native-firebase/messaging';

class App extends Component {

    componentDidMount() {
        notificationListener = messaging().onMessage(async notification => {




        });
        messaging().onNotificationOpenedApp(remoteMessage => {

        });

        // Check whether an initial notification is available
        messaging()
            .getInitialNotification()
            .then(async remoteMessage => {



            });
    }
    render() {
        return (
            <Root>
                <Router />
            </Root>

        );
    }
}

export default App;