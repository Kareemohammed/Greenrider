import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingOption}>
        <Ionicons name="notifications-outline" size={24} color="#4CAF50" style={styles.icon} />
        <Text style={styles.optionText}>Notification Settings</Text>
      </View>

      <View style={styles.settingOption}>
        <Ionicons name="lock-closed-outline" size={24} color="#4CAF50" style={styles.icon} />
        <Text style={styles.optionText}>Privacy Settings</Text>
      </View>

      <View style={styles.settingOption}>
        <Ionicons name="person-outline" size={24} color="#4CAF50" style={styles.icon} />
        <Text style={styles.optionText}>Account Settings</Text>
      </View>

      <View style={styles.settingOption}>
        <Ionicons name="card-outline" size={24} color="#4CAF50" style={styles.icon} />
        <Text style={styles.optionText}>Payment Settings</Text>
      </View>

      <View style={styles.settingOption}>
        <Ionicons name="help-circle-outline" size={24} color="#4CAF50" style={styles.icon} />
        <Text style={styles.optionText}>Help & Support</Text>
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
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 30,
    textAlign: 'center',
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4CAF50',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default SettingsScreen;
