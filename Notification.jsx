import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const NotificationSettings = () => {
  const handleToggleNotification = () => {
    // Logic to toggle notification settings
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notification Settings</Text>

      <TouchableOpacity style={styles.option} onPress={handleToggleNotification}>
        <Text style={styles.optionText}>Toggle Notifications</Text>
        <Text style={styles.optionDescription}>Receive notifications for important events</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Handle other notification settings */ }}>
        <Text style={styles.optionText}>Sound Settings</Text>
        <Text style={styles.optionDescription}>Customize notification sound</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Handle other notification settings */ }}>
        <Text style={styles.optionText}>Vibration Settings</Text>
        <Text style={styles.optionDescription}>Control vibration for notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => { /* Handle other notification settings */ }}>
        <Text style={styles.optionText}>Notification Timing</Text>
        <Text style={styles.optionDescription}>Set time to receive notifications</Text>
      </TouchableOpacity>

      {/* Add more notification settings as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 14,
    color: '#888888',
  },
});

export default NotificationSettings;
