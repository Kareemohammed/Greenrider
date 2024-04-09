import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  useEffect(() => {
    if (signupSuccess) {
      const timer = setTimeout(() => {
        navigation.navigate('Login');
      }, 3000); // Change delay time as needed
      return () => clearTimeout(timer);
    }
  }, [signupSuccess]);

  const handleSignUp = async () => {
    if (!email || !password || !fullName) {
      // Alert user to fill in all fields
      return;
    }

    if (password !== confirmPassword) {
      // Alert user passwords do not match
      return;
    }

    try {
      const authResult = await auth().createUserWithEmailAndPassword(email, password);
      const { user } = authResult;
      
      // Update display name (optional)
      await user.updateProfile({
        displayName: fullName,
      });

      // Store user data in Firebase Realtime Database
      await database().ref(`users/${user.uid}`).set({
        fullName,
        email,
      });

      setSignupSuccess(true);
    } catch (error) {
      console.error('Error signing up:', error);
      // Alert user of signup error
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LinearGradient colors={['#388E3C', '#16222A']} style={styles.container}>
      <StatusBar backgroundColor="#4A55A2" barStyle="light-content" />
      <View style={styles.formContainer}>
        <Text style={styles.signInText}>Sign Up</Text>
        <Text style={styles.subText}>Create Your Account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            style={styles.input}
            placeholder="Enter Your Full Name"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInput}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              style={styles.passwordField}
              placeholder="Password"
              placeholderTextColor="gray"
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '🔒'}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={!showPassword}
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
          />
        </View>
        <Pressable style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>
        <Modal
          animationType="fade"
          transparent={true}
          visible={signupSuccess}
          onRequestClose={() => setSignupSuccess(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Sign up successful!</Text>
              <TouchableOpacity
                onPress={() => {
                  setSignupSuccess(false);
                  navigation.navigate('Login');
                }}
              ></TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    maxWidth: 400,
    borderColor: 'black',
    borderWidth: 2,
  },
  signInText: {
    color: '#4A55A2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  input: {
    fontSize: 18,
    color: 'black',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  passwordField: {
    flex: 1,
    fontSize: 18,
    color: 'black',
    padding: 10,
  },
  eyeIcon: {
    fontSize: 20,
    color: 'gray',
  },
  signUpButton: {
    backgroundColor: '#64B5F6',
    width: '70%',
    padding: 15,
    borderRadius: 6,
    marginTop: 30,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loginLinkText: {
    color: '#4A55A2',
    fontSize: 16,
    marginTop: 20,
  },
  signUpText: {
    color: '#4A55A2',
    fontSize: 16,
    marginTop: 20,
  },
});

export default RegisterScreen;
