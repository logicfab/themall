import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';

import {AdMobBanner} from 'react-native-admob';
import {NativeAdsManager, AdSettings} from 'react-native-fbads';
import NativeAdView from './src/components/NativeAdView';

AdSettings.clearTestDevices();
AdSettings.setLogLevel('debug');
AdSettings.addTestDevice(AdSettings.currentDeviceHash);

const adsManager = new NativeAdsManager('718535598698803_718536412032055');

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
      <SafeAreaView>
        <View style={styles.appHeaderContainer}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => alert('menu')}>
            <Image
              source={require('./src/assets/menu.png')}
              style={[styles.icon]}
            />
          </TouchableOpacity>
          <Image
            source={require('./src/assets/logo.png')}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => alert('settings')}>
            <Image
              source={require('./src/assets/settings.png')}
              style={[styles.icon, {height: 30, width: 30, marginTop: -1}]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#FFF',
          }}>
          <NativeAdView
            adsManager={adsManager}
            adChoicePosition="bottomRight"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#FFF',
          }}>
          <NativeAdView
            adsManager={adsManager}
            adChoicePosition="bottomRight"
          />
        </View>
        <View style={{flex: 1}}>
          <AdMobBanner
            adSize="smartBannerLandscape"
            // adUnitID={`${
            //   Platform.OS !== 'ios'
            //     ? 'ca-app-pub-5170626630841467/8258831062'
            //     : 'ca-app-pub-5170626630841467/4724579037'
            // }`}
            adUnitID={'ca-app-pub-5170626630841467/4724579037'}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
  },
  appHeaderContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  logo: {
    resizeMode: 'contain',
    height: 60,
    width: '30%',
  },
  iconBtn: {
    width: 30,
  },
  icon: {
    height: 40,
    width: 40,
    marginTop: 10,
  },
});

export default App;
