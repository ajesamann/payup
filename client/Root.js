//react
import React from 'react';
//redux
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './store/store';
//languages
import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
//app
import App from './App';


const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require("./langs/en.json")
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

//make this variable dynamic, it will allow the user to change their language
//write a function to check if there is a current language set, if so use that, if not resort to the app to try and detect it, if not that then resort to the fallback
const currentUserLang = { languageTag: "en", isRTL: false }

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    currentUserLang || RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

const store = createStore(combineReducers);

export default class Root extends React.Component{
  constructor(props) {
    super(props);
    setI18nConfig(); // set initial config
  }
  
  componentDidMount(){
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
  };

  componentWillUnmount(){
    RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  };

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  //grab the correct translation for the string provided and return it
  returnLang = (string) => {
    return translate(string)
  }

  render(){
    return(
			<Provider store={store}>
        <App lang={this.returnLang}/>
			</Provider>
    )
  }
}