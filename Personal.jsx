import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import database from '@react-native-firebase/database';


const PersonalScreen = () => {
  const [userData, setUserData] = useState({
    Name: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userRef = database().ref('users');

      userRef.once('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // If user data exists in the database, set it in the state
          setUserData(data);
        }
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchUserData(); // Refresh user data
    setTimeout(() => setRefreshing(false), 2000);
  };

  const saveUserData = async () => {
    // Save user data to the database
    try {
      const userRef = database().ref('users');

      await userRef.set(userData);

      console.log('User data saved successfully!');
      setEditMode(false);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const handleChange = (key, value) => {
    // Update user data in the state
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{userData.Name}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Personal Information</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={24} color="#4CAF50" />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="gray"
            value={userData.Name}
            onChangeText={(text) => handleChange('Name', text)}
            editable={editMode}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="#4CAF50" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="gray"
            keyboardType="email-address"
            value={userData.email}
            onChangeText={(text) => handleChange('email', text)}
            editable={editMode}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="phone" size={24} color="#4CAF50" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            value={userData.phoneNumber}
            onChangeText={(text) => handleChange('phoneNumber', text)}
            editable={editMode}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="location-on" size={24} color="#4CAF50" />
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="gray"
            value={userData.address}
            onChangeText={(text) => handleChange('address', text)}
            editable={editMode}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="date-range" size={24} color="#4CAF50" />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            placeholderTextColor="gray"
            value={userData.dateOfBirth}
            onChangeText={(text) => handleChange('dateOfBirth', text)}
            editable={editMode}
          />
        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={editMode ? saveUserData : () => setEditMode(true)}>
          <Text style={styles.editButtonText}>
            {editMode ? 'Save' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#64B5F6',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalScreen;
