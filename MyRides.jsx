import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Card } from 'react-native-paper';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library

const MyRidesScreen = () => {
  const [myRidesData, setMyRidesData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch data from Firebase database
  const fetchMyRidesData = async () => {
    try {
      const snapshot = await database().ref('bookings').once('value');
      const data = snapshot.val();
      if (data) {
        const rides = Object.values(data); // Convert object to array
        // Sort rides by date and time in descending order
        rides.sort((a, b) => {
          return new Date(`${b.date} ${b.time}`).getTime() - new Date(`${a.date} ${a.time}`).getTime();
        });
        setMyRidesData(rides);
      }
    } catch (error) {
      console.error('Error fetching my rides data:', error);
    }
  };

  // Function to handle refresh
  const onRefresh = () => {
    setRefreshing(true);
    fetchMyRidesData().then(() => {
      setRefreshing(false);
    });
  };

  // Fetch data from Firebase database on component mount
  useEffect(() => {
    fetchMyRidesData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.title}>My Rides</Text>
      {myRidesData.length === 0 ? (
        <View style={styles.noRidesContainer}>
          <Icon name="ticket" size={100} color="#008080" />
          <Text style={styles.noRidesText}>No rides to display</Text>
        </View>
      ) : (
        myRidesData.map(ride => (
          <Card key={ride.ticketNumber} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.timeDateContainer}>
                <Text style={styles.dateText}>Date: {ride.date}</Text>
                <Text style={styles.timeText}>Time: {ride.time}</Text>
              </View>
              <Text style={styles.text}>Source: {ride.source}</Text>
              <Text style={styles.text}>Destination: {ride.destination}</Text>
              <Text style={styles.text}>Ticket Number: {ride.ticketNumber}</Text>
            </View>
          </Card>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: '#f0f0f0',
    width: '95%',
    alignSelf: 'center',
  },
  cardContent: {
    padding: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  timeDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 14,
    color: '#008080',
  },
  dateText: {
    fontSize: 14,
    color: '#008080',
  },
  noRidesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRidesText: {
    fontSize: 20,
    color: '#008080',
    marginTop: 20,
  },
});

export default MyRidesScreen;
