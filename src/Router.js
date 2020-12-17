import React from 'react';
import { Image, View } from 'react-native';
import { Router, Tabs, Scene, Stack } from 'react-native-router-flux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Home from './components/Home';

import Product from './components/Product';
// import Profile from './components/Profile';

// import Turntime from './components/Turntime';




const ImageIcon = ({ name, focused }) => {

  let image;
  let colorHex = focused ? '#332f80' : '#1d1a1c';

  switch (name) {
    case 'duration':
      image = require('./components/Assets/images/duration.png')
      break;
    case 'home':
      image = require('./components/Assets/images/home.png')
      break;
    case 'notify':
      image = require('./components/Assets/images/notify.png')
      break;
    case 'acc':
      image = require('./components/Assets/images/acc.png')
      break;

  }
  return (
    <View style={{ width: wp(10), height: hp(6), justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
      <Image
        style={{
          tintColor: colorHex,
          opacity: 1,
          alignSelf: 'center',
          width: wp(5.5),
          height: hp(4.5),
          resizeMode: 'contain',

        }}
        source={image}
      />
    </View>
  )
};

const Routercomponent = () => {


  return (
    <Router>
      <Stack key="root">
        <Tabs key="MainStack" showLabel={false}
          tabBarStyle={{
            backgroundColor: '#fff', height: hp(8),
            alignSelf: 'center', borderTopWidth: 0
          }}
          hideNavBar
        >
          {/* <Scene key="active" component={Turntime} hideNavBar name='duration' icon={ImageIcon} /> */}
          <Scene key="Home" component={Home} hideNavBar name='home' icon={ImageIcon} />
          <Scene key="notify" component={Home} hideNavBar name='notify' icon={ImageIcon} />
          <Scene key="duration" component={Home} hideNavBar name='duration' icon={ImageIcon} />
          <Scene key="acc" component={Home} hideNavBar name='acc' icon={ImageIcon} />

          {/* <Scene key="User" component={Profile} hideNavBar name='acc' icon={ImageIcon} /> */}
        </Tabs>
        <Scene key="product" component={Product} hideNavBar />
      </Stack>
    </Router >
  );
}

export default Routercomponent;  