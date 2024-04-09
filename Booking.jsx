import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import database from '@react-native-firebase/database';
import RazorpayCheckout from 'react-native-razorpay';

const BookingScreen = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [qrData, setQRData] = useState('');

  const [stations, setStations] = useState({
    sources: [
      'Kelambakkam',
      'Vandalur Road Junction',
      'Chettinad Hospital',
      'Hindustan College',
      'O.M.R. Padur',
      'Akshaya',
      'Kazhipattur',
      'Vaniyanchavadi Padma Adarsh School',
      'S.I.P.C.O.T. (Muttukadu)',
      'Siruseri (Muttukadu)',
      'Egattur',
      'Navalur Bus Stop',
      'Semmancheri',
      'Satyabhama Dental College and Hospital',
      'Kumaran Nagar',
      'Ponniamman Kovil',
      'Sholinganallur (Government School)',
      'Sholinganallur',
      'Accenture',
      'Karapakkam',
      'T.C.S.',
      'Okkiyampet',
      'P.T.C. Quarters',
      'Mettukuppam',
      'Rattha Tech Tower',
      'D.B. Jain College',
      'Seevaram',
      'Perungudi',
      'Kandanchavadi',
      'I.G.P.',
    ],
    destinations: [
      'Kelambakkam',
      'Vandalur Road Junction',
      'Chettinad Hospital',
      'Hindustan College',
      'O.M.R. Padur',
      'Akshaya',
      'Kazhipattur',
      'Vaniyanchavadi Padma Adarsh School',
      'S.I.P.C.O.T. (Muttukadu)',
      'Siruseri (Muttukadu)',
      'Egattur',
      'Navalur Bus Stop',
      'Semmancheri',
      'Satyabhama Dental College and Hospital',
      'Kumaran Nagar',
      'Ponniamman Kovil',
      'Sholinganallur (Government School)',
      'Sholinganallur',
      'Accenture',
      'Karapakkam',
      'T.C.S.',
      'Okkiyampet',
      'P.T.C. Quarters',
      'Mettukuppam',
      'Rattha Tech Tower',
      'D.B. Jain College',
      'Seevaram',
      'Perungudi',
      'Kandanchavadi',
      'I.G.P.',
    ],
  });

  // Fare data
  const fareData = {
    '1-2': 15.0,
    '3-5': 20.0,
    '6-8': 30.0,
    '9-14': 40.0,
    '15-18': 50.0,
    '19-24': 60.0,
    '25-27': 70.0,
    '28-30': 80.0,
  };

  const handleSourceChange = selectedSource => {
    setSource(selectedSource);
    // Update booking data with new source
    setBookingData(prevData => ({
      ...prevData,
      source: selectedSource,
    }));
    setShowSourceModal(false);
  };
  

  const handleDestinationChange = selectedDestination => {
    setDestination(selectedDestination);
    // Update booking data with new destination
    setBookingData(prevData => ({
      ...prevData,
      destination: selectedDestination,
    }));
    setShowDestinationModal(false);
  };

  const calculateFare = () => {
    // Get the index of source and destination stations
    const sourceIndex = stations.sources.indexOf(source);
    const destinationIndex = stations.destinations.indexOf(destination);

    // If source or destination is not found, return 0 as fare
    if (sourceIndex === -1 || destinationIndex === -1) {
      return 0;
    }

    // Calculate the number of stops between source and destination
    const stopRange = Math.abs(destinationIndex - sourceIndex) + 1;

    // Define fare based on the stop range
    let fare = 0;
    if (stopRange >= 1 && stopRange <= 2) {
      fare = 15.0;
    } else if (stopRange >= 3 && stopRange <= 5) {
      fare = 20.0;
    } else if (stopRange >= 6 && stopRange <= 8) {
      fare = 30.0;
    } else if (stopRange >= 9 && stopRange <= 14) {
      fare = 40.0;
    } else if (stopRange >= 15 && stopRange <= 18) {
      fare = 50.0;
    } else if (stopRange >= 19 && stopRange <= 24) {
      fare = 60.0;
    } else if (stopRange >= 25 && stopRange <= 27) {
      fare = 70.0;
    } else if (stopRange >= 28 && stopRange <= 30) {
      fare = 80.0;
    }

    return fare;
  };

  const generateQRCode = () => {
    if (!paymentSuccessful) {
      // If payment is not successful, return early
      return;
    }

    // Get current time and date
    const currentTime = new Date().toLocaleTimeString('en-US', {hour12: true});
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const ticketNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    const fare = calculateFare();
    const data = `Ticket Number: ${ticketNumber}\nDate: ${currentDate}\nTime: ${currentTime}\nSource: ${source}\nDestination: ${destination}\nFare: ₹${fare}`;

    setQRData(data);
    setShowQRCode(true);
    // Save booking data to Firebase
    saveBookingData(
      source,
      destination,
      ticketNumber,
      currentTime,
      currentDate,
      fare,
    );

    // Invalidate QR code after 2 minutes
    setTimeout(() => {
      setQRData('Expired');
    }, 120000); // 2 minutes in milliseconds
  };

  const handleContinue = () => {
    const currentTime = new Date().toLocaleTimeString('en-US', {hour12: true});
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const fare = calculateFare();
    const bookingInfo = {
      time: currentTime, // Current time
      date: currentDate, // Current date
      source: source,
      destination: destination,
      fare: fare, // Fare in rupees
    };
    setBookingData(bookingInfo);
    setShowPreview(true);
  };

  const handleCloseQRCode = () => {
    setShowQRCode(false);
    setShowPreview(false);
    setSource('');
    setDestination('');
    setBookingData(null);
    setQRData('');
  };

  const saveBookingData = (
    source,
    destination,
    ticketNumber,
    time,
    date,
    fare,
  ) => {
    try {
      const bookingRef = database().ref('bookings');
      bookingRef.push({
        source,
        destination,
        ticketNumber,
        time, 
        date, 
        fare, 
      });
      console.log('Booking data saved successfully!');
    } catch (error) {
      console.error('Error saving booking data:', error);
    }
  };

  // Helper function to display the fare in rupees
  const displayFare = () => {
    const fare = calculateFare();
    return `₹${fare}`;
  };
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    // Your existing handlePayment function
    const fare = calculateFare();
    var options = {
      description: 'Enjoy the ride',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'api key ',
      amount: `${fare * 100}`,
      name: 'GreenRiders',
      order_id: '',
      prefill: {
        email: 'Kareemohammed@gmail.com',
        contact: '9176820919',
        name: 'Mohammed Kareem S',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
        setPaymentSuccessful(true);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking</Text>
      </View>
      {/* <LinearGradient colors={['#388E3C', '#16222A']} style={styles.gradient}> */}
      <View style={styles.content}>
        <Text style={styles.title}>Select Source and Destination</Text>
        <TouchableOpacity
          style={styles.selectionButton}
          onPress={() => setShowSourceModal(true)}>
          <Text style={styles.selectionButtonText}>
            {source || 'Select Source'}
          </Text>
          <Ionicons name="caret-down-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectionButton}
          onPress={() => setShowDestinationModal(true)}>
          <Text style={styles.selectionButtonText}>
            {destination || 'Select Destination'}
          </Text>
          <Ionicons name="caret-down-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.smallButton,
            showPreview && {width: '100%'},
          ]}
          onPress={showPreview ? generateQRCode : handleContinue}>
          <Text style={styles.buttonText}>
            {showPreview ? 'QR Code' : 'Continue'}
          </Text>
        </TouchableOpacity>
        {showPreview && (
          <View style={styles.previewContainer}>
            <Text style={styles.previewTitle}>Booking Preview</Text>
            <View style={styles.previewDetails}>
              <Text style={styles.previewLabel}>Time:</Text>
              <Text style={styles.previewValue}>{bookingData.time}</Text>
            </View>
            <View style={styles.previewDetails}>
              <Text style={styles.previewLabel}>Date:</Text>
              <Text style={styles.previewValue}>{bookingData.date}</Text>
            </View>
            <View style={styles.previewDetails}>
              <Text style={styles.previewLabel}>Source:</Text>
              <Text style={styles.previewValue}>{bookingData.source}</Text>
            </View>
            <View style={styles.previewDetails}>
              <Text style={styles.previewLabel}>Destination:</Text>
              <Text style={styles.previewValue}>{bookingData.destination}</Text>
            </View>
            <View style={styles.previewDetails}>
              <Text style={styles.previewLabel}>Fare:</Text>
              <Text style={styles.previewValue}>{displayFare()}</Text>
            </View>
            {/* Add Payment button here */}
            <TouchableOpacity
              style={[styles.button, styles.smallButton]}
              onPress={handlePayment}
              disabled={paymentSuccessful}>
              <Text style={styles.buttonText}>Payment</Text>
            </TouchableOpacity>
           
          </View>
        )}
      </View>
      {/* </LinearGradient> */}
      <Modal visible={showSourceModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {stations.sources.map((station, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => handleSourceChange(station)}>
                <Text style={styles.modalItemText}>{station}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
      <Modal
        visible={showDestinationModal}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {stations.destinations.map((station, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => handleDestinationChange(station)}>
                <Text style={styles.modalItemText}>{station}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
      <Modal visible={showQRCode} transparent={true} animationType="slide">
        <View style={styles.qrModalContainer}>
          <View style={styles.qrModalContent}>
            {qrData ? (
              <QRCode value={qrData} size={200} />
            ) : (
              <Text>No QR Data</Text>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseQRCode}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet
.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 34,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  selectionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: 'black', // Add border color for source and destination selectors
    borderWidth: 1, // Add border width for source and destination selectors
    backgroundColor: '#f2f2f2',

  },
  selectionButtonText: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#64B5F6',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  smallButton: {
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: 'black',
    borderWidth: 2,
    borderColor:'black',
    borderWidth:2,
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    maxHeight: '70%',
    borderColor: 'black',
    borderWidth: 2,
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  qrModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  qrModalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewContainer: {
    marginTop: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    borderColor: 'black',
    borderWidth: 2,
  },
  previewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  previewDetails: {
    flexDirection: 'row',
    marginVertical: 5,
    color: 'black',
  },
  
  previewLabel: {
    fontWeight: 'bold',
    color: '#444',
  },
  previewValue: {
    flex: 1,
    textAlign: 'right',
    color: 'black', 
  },
  
  
});

export default BookingScreen;

