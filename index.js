/**
 * @format
 */
import 'react-native/Libraries/Core/InitializeCore';
import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

if (Text.defaultProps) {
  Text.defaultProps.allowFontScalling = false;
} else {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScalling = false;
}

if (TextInput.defaultProps) {
  TextInput.defaultProps.allowFontScalling = false;
} else {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScalling = false;
}

AppRegistry.registerComponent(appName, () => App);
