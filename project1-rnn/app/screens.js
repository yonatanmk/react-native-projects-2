import { Navigation } from 'react-native-navigation';

import store from './store';
import RedBall from './components/red-ball';
import BlueBall from './components/blue-ball';
// import List from './components/list';
// import Counter from './components/counter';
// import FormInput from './components/form-input';

export default (store, Provider) => {
  Navigation.registerComponent('redBall', () => RedBall);
  Navigation.registerComponent('blueBall', () => BlueBall);
};
