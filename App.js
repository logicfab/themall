import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar, Platform,
} from 'react-native';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <AdMobBanner
            adSize="smartBannerLandscape"
            adUnitID={`${
              Platform.OS === 'ios'
                ? 'ca-app-pub-5170626630841467/4724579037'
                : 'ca-app-pub-5170626630841467/8258831062'
            }`}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
  },
});

export default App;
