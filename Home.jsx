import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Easing } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleStartBooking = () => {
    navigation.navigate('Book');
  };

  // Animated values for card movement
  const cardPosition1 = useRef(new Animated.Value(0)).current;
  const cardPosition2 = useRef(new Animated.Value(0)).current;
  const cardPosition3 = useRef(new Animated.Value(0)).current;

  // Function to start card animation
  const startAnimation = (animatedValue) => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>GreenRiders</Text>
        <Text style={styles.heroSubtitle}>Convenient & Reliable</Text>
      </View>
      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <View style={styles.feature}>
          <Text style={styles.featureBullet}>1</Text>
          <Text style={styles.featureText}>
            Quick and easy booking process for local bus rides.
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureBullet}>2</Text>
          <Text style={styles.featureText}>
            Real-time bus schedules and availability updates.
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureBullet}>3</Text>
          <Text style={styles.featureText}>Secure and hassle-free payment options.</Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureBullet}>4</Text>
          <Text style={styles.featureText}>
            Receive instant notifications for booking confirmations.
          </Text>
        </View>
      </View>
      {/* Moving Cards Section */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={[styles.card, { transform: [{ translateY: cardPosition1 }] }]}
          onPress={() => startAnimation(cardPosition1)}>
          <Text style={styles.cardText}>Book your next ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { transform: [{ translateY: cardPosition2 }] }]}
          onPress={() => startAnimation(cardPosition2)}>
          <Text style={styles.cardText}>Explore bus routes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { transform: [{ translateY: cardPosition3 }] }]}
          onPress={() => startAnimation(cardPosition3)}>
          <Text style={styles.cardText}>Track your bus</Text>
        </TouchableOpacity>
      </View>
      {/* Call-to-Action Section */}
      <TouchableOpacity
        style={[styles.ctaButton, { backgroundColor: '#64B5F6' }]}
        onPress={handleStartBooking}>
        <Text style={styles.ctaButtonText}>Start Booking Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  hero: {
    marginBottom: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureBullet: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    width: '30%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    borderColor: '#4CAF50',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  cardText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  ctaButton: {
    paddingVertical: 15,
    borderRadius: 10,
  },
  ctaButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
