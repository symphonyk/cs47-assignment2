import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>

      <View backgroundColor='grey' style={styles.navBar}>
                  <Image resizeMode='contain' source={require('./assets/Icons/menu_light.png')} style={{width: 50, height: 50}}/>
                  <Text style={{ fontWeight: 'bold', fontSize: 30}}>
                    ensom
                  </Text>
                  <Image resizeMode='contain' source={require('./assets/Icons/sun.png')} style={{width: 50, height: 50}}/>
      </View>



      <View style={styles.middle}>

        
        <ImageBackground source={require('./assets/Profiles/mtl.jpg')} style={{width: 350, height: 370}}>
        <View style={styles.photo}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white'}}>
          MTL
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white'}}>
          2 miles away
        </Text>
        </View>
        </ImageBackground>
  
        
        
        <View backgroundColor='white' style={styles.music}>
          <Text style={{ fontWeight: 'bold', fontSize: 30}}>
            My hottest take
          </Text>

          <View backgroundColor='white' style={styles.audio}>
          <Image resizeMode='contain' source={require('./assets/Icons/player_light.png')} style={{width: 50, height: 50}}/>
          <Image resizeMode='contain' source={require('./assets/Icons/audio_waveform_light.png')} style={{width: 300, height: 100}}/>
          </View>
        </View>
      </View>


      <View backgroundColor='black' style={styles.bottom}>

      <View style={styles.button}>
        <Image resizeMode='contain' source={require('./assets/Icons/discover_light.png')} style={{width: 50, height: 50}}/>
        <Text style={{color: 'white'}}>
          Direction
        </Text>
      </View>
        
      <View style={styles.button}>
        <Image resizeMode='contain' source={require('./assets/Icons/heart_light.png')} style={{width: 50, height: 50}}/>
        <Text style={{color: 'white'}}>
          Matches
        </Text>
      </View>

      <View style={styles.button}>
        <Image resizeMode='contain' source={require('./assets/Icons/messages_light.png')} style={{width: 50, height: 50}}/>
        <Text style={{color: 'white'}}>
          DMs
        </Text>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  audio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  button: {
    textDecorationColor: 'white'
  },
  photo: {
    flexDirection: 'column',
    alignSelf: 'stretch'
  }

});
