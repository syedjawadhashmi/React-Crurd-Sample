import Expo, { AppLoading } from 'expo';
import React from 'react';
import { AsyncStorage, UIManager } from 'react-native';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from './constants/colors'
import Root from './src/root'
import store from './src/store';

EStyleSheet.build(colors);

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


class App extends React.Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'loginReducer',
        ],
      },
      () => this.setState({ ready: true })
    );
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
