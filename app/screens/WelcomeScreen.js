import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell Everything</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonContainer: {
    padding: 20,
    width: '100%',
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },

  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },

  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
