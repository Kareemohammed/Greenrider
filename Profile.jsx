import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.name}>Greenriders</Text>
          </View>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Personal')}>
          <AntDesign name="user" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Personal Details</Text>
          <AntDesign name="right" size={18} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="credit-card" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Payment Methods</Text>
          <AntDesign name="right" size={18} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Settings')}>
          <AntDesign name="setting" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Settings</Text>
          <AntDesign name="right" size={18} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Routes')}>
          <Fontisto name="bus" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Routes</Text>
          <AntDesign name="right" size={18} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <AntDesign name="logout" size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Sign Out</Text>
          <AntDesign name="right" size={18} color="#4CAF50" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Greenriders</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  heroSection: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Roboto', // You can change the font family if you have custom fonts
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#4CAF50',
    flex: 1,
    marginLeft: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#999',
  },
});

export default ProfileScreen;
