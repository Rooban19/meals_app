// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import productsReducer from './store/reducers/product';
// import ShopNavigatior from './navigation/ShopNavigatior';
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';

// // import { AppLoading } from 'expo';
// // import * as Font from 'expo-font';

// const rootReducer = combineReducers({
//   products: productsReducer,
// });

// const store = createStore(rootReducer);

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
// };


 

// export default function App() {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   if (!fontLoaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => {
//           setFontLoaded(true);
//         }}
//       />
//     );
//   }

//   return (
//     <Provider store={store}>
//       <ShopNavigatior />
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/product';
import orderReducer from './store/reducers/order';
import cartReducer from './store/reducers/cart';
import ShopNavigatior from './navigation/ShopNavigatior';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigatior />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
