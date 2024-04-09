import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../LoginScreen/Login';

const SplashScreen = () => {
  const navigation = useNavigation(); // Initialize navigation object
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Simulating a delay for the splash screen
    const timeout = setTimeout(() => {
      setSplashVisible(false);
      if (navigation && navigation.replace) {
        navigation.replace('Login'); // Navigate to the main screen after the delay
      }
    }, 2000); // Adjust the delay duration as needed (in milliseconds)

    return () => clearTimeout(timeout); // Cleanup the timeout to prevent memory leaks
  }, [navigation]); // Add navigation as a dependency

  return (
    <View style={styles.container}>
      {splashVisible ? (
        <View style={styles.splashContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          {/* You can add more text or styling here */}
          <Text style={styles.splashText}>GreenRiders</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Optional: Set background color for the whole screen
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black', // Optional: Set text color for the splash screen
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 20, // Optional: Adjust margin bottom as needed
  },
});

export default SplashScreen;
