import {AppRegistry} from 'react-native';
import ReactCalculator from './src/reactCalculator.js';
import {name as appName} from './src/reactCalculator.json';

AppRegistry.registerComponent(appName, () => ReactCalculator);