import React from 'react';
import { Text, View } from 'react-native';
import { Router, Tabs, Scene, Stack } from 'react-native-router-flux';

import Home from './components/Home';

import Product from './components/Product';
import { Icon } from 'native-base';
import Styles, { buttonColor, hp, lor, primaryColor, rol, secondaryColor, wp } from './components/Assets/style/Styles';





const ImageIcon = ({ name, focused }) => {

  let image;
  let colorHex = focused ? buttonColor : '#808080';
  let type = 'AntDesign'
  switch (name) {
    case 'Recipes':
      image = 'filetext1'
      break;
    case 'Favourite':
      image = 'hearto'
      break;
    case 'Shoplist':
      image = 'shoppingcart'
      break;
    case 'Pantry':
      image = 'box'
      type = 'Entypo'
      break;
    case 'Profile':
      image = 'user'
      break;

  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Icon name={image} type={type} style={{ fontSize: wp(6), color: colorHex }} />
      <Text style={[Styles.normalText, { color: colorHex, fontSize: wp(3) }]}>
        {name}
      </Text>
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
          <Scene component={Home} hideNavBar name='Recipes' icon={ImageIcon} />
          <Scene component={Home} hideNavBar name='Favourite' icon={ImageIcon} />
          <Scene component={Home} hideNavBar name='Shoplist' icon={ImageIcon} />
          <Scene component={Home} hideNavBar name='Pantry' icon={ImageIcon} />

          <Scene component={Home} hideNavBar name='Profile' icon={ImageIcon} />
        </Tabs>
        <Scene key="product" component={Product} hideNavBar />
      </Stack>
    </Router >
  );
}

export default Routercomponent;  