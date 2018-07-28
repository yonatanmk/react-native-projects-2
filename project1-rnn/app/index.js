import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import store from './store';

// import registerScreens from './screens'

import RedBall from './components/red-ball';
import BlueBall from './components/blue-ball';
// import List from './components/list';
import Counter from './components/counter';
// import FormInput from './components/form-input';

export default () => {
  // registerScreens(store, Provider)

  Navigation.registerComponent('RedBall', () => RedBall);
  Navigation.registerComponent('BlueBall', () => BlueBall);
  Navigation.registerComponent('Counter', () => Counter, store, Provider);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Red Ball',
        screen: 'RedBall',
        title: 'Red Ball'
      },
      {
        label: 'Blue Ball',
        screen: 'BlueBall',
        title: 'Blue Ball'
      },
      {
        label: 'Counter',
        screen: 'Counter',
        title: 'Counter'
      },
    ]
  });
};
