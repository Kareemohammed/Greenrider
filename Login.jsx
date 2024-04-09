import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Modal,
  Pressable,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('User signed in successfully!');
      // setModalVisible(true); // Show modal on successful login
      // Navigate to Main screen after successful login
      navigation.navigate('Main');
    } catch (error) {
      console.error('Error signing in:', error);
      // Show error message
      Alert.alert('Error', 'Invalid email or password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    // Implement the logic for handling forgotten password
    console.log('Forgot Password?');
  };

  return (
    <LinearGradient colors={['#388E3C', '#16222A']} style={styles.container}>
      <StatusBar backgroundColor="#4A55A2" barStyle="light-content" />
      <View style={styles.formContainer}>
        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.subText}>Sign In to Your Account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
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
              onChangeText={text => setPassword(text)}
              secureTextEntry={!showPassword} // Toggle secureTextEntry based on state
              style={styles.passwordField}
              placeholder="Password"
              placeholderTextColor="gray"
            />
            <Pressable onPress={togglePasswordVisibility}>
              <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '🔒'}</Text>
            </Pressable>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* Modal for success message */}
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Successfully logged in!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
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
    borderRadius: 20,
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
  loginButton: {
    backgroundColor: '#64B5F6',
    width: '70%',
    padding: 15,
    borderRadius: 6,
    marginTop: 30,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // // Styles for the modal
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // modalText: {
  //   color: 'green',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  forgotPasswordText: {
    color: '#4A55A2',
    fontSize: 16,
    marginTop: 10,
  },
  signUpText: {
    color: '#4A55A2',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoginScreen;
