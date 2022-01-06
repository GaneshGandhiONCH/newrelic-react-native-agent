/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as keys from './newrelic.json';
import NewRelic from 'newrelic-react-native-agent';

NewRelic.startAgent(keys.licenseKey.ios);
NewRelic.recordCustomEvent("MobileModularAgentTest", "react-native-modular-agent", {"platform1": Platform.OS, "appDidMount": "true"});
AppRegistry.registerComponent(appName, () => App);
