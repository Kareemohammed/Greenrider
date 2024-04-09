import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RouteScreen = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  const handleBusPress = busNumber => {
    setSelectedBus(selectedBus === busNumber ? null : busNumber);
  };

  const stops102 = [
    {name: 'Broadway'},
    {name: 'R.B.I. Parrys'},
    {name: 'Secretariat'},
    {name: 'Island Ground'},
    {name: 'Anna Square'},
    {name: 'Marina Beach'},
    {name: 'Kannagi Statue'},
    {name: 'Queen Marys College'},
    {name: 'Light House (All India Radio)'},
    {name: 'Employment Office (Santhome)'},
    {name: 'Foreshore Estate'},
    {name: 'M.R.C. Nagar'},
    {name: 'Iyappan Koil'},
    {name: 'Music College'},
    {name: 'Andhra Mahila Sabha Hospital (Sathya Studios)'},
    {name: 'Adyar Signal'},
    {name: 'Adayar O.T.'},
    {name: 'Adyar Depot'},
    {name: 'Indira Nagar Water Tank'},
    {name: 'Jayanthi Theatre'},
    {name: 'L.B. Road Jayanthi Theatre'},
    {name: 'S.R.P. Tool'},
    {name: 'I.G.P.'},
    {name: 'Kandanchavadi'},
    {name: 'Perungudi'},
    {name: 'Seevaram'},
    {name: 'Jain College'},
    {name: 'Rattha Tech Tower'},
    {name: 'Okkiyampet'},
    {name: 'T.C.S.'},
    {name: 'Karapakkam'},
    {name: 'Accenture'},
    {name: 'Sholinganallur'},
    {name: 'Satyabhama Dental College and Hospital'},
    {name: 'Semmancheri'},
    {name: 'Navallur'},
    {name: 'Siruseri (Muttukadu)'},
    {name: 'S.I.P.C.O.T. (Muttukadu)'},
    {name: 'Vaniyanchavadi Padma Adarsh School'},
    {name: 'Kazhipattur'},
    {name: 'Hindustan College'},
    {name: 'Chettinad Hospital'},
    {name: 'Padur'},
    {name: 'Vandalur Road Junction'},
    {name: 'Kelambakkam'},
  ];

  const stops570s = [
    {name: 'Kelambakkam'},
    {name: 'Vandalur Road Junction'},
    {name: 'Chettinad Hospital'},
    {name: 'Hindustan College'},
    {name: 'O.M.R. Padur'},
    {name: 'Akshaya'},
    {name: 'Kazhipattur'},
    {name: 'Vaniyanchavadi Padma Adarsh School'},
    {name: 'S.I.P.C.O.T. (Muttukadu)'},
    {name: 'Siruseri (Muttukadu)'},
    {name: 'Egattur'},
    {name: 'Navalur Bus Stop'},
    {name: 'Semmancheri'},
    {name: 'Satyabhama Dental College and Hospital'},
    {name: 'Kumaran Nagar'},
    {name: 'Ponniamman Kovil'},
    {name: 'Sholinganallur (Government School)'},
    {name: 'Sholinganallur'},
    {name: 'Accenture'},
    {name: 'Karapakkam'},
    {name: 'T.C.S.'},
    {name: 'Okkiyampet'},
    {name: 'P.T.C. Quarters'},
    {name: 'Mettukuppam'},
    {name: 'Rattha Tech Tower'},
    {name: 'D.B. Jain College'},
    {name: 'Seevaram'},
    {name: 'Perungudi'},
    {name: 'Kandanchavadi'},
    {name: 'I.G.P.'},
    {name: 'S.R.P. Tool'},
    {name: 'Taramani 100 Feet Road'},
    {name: 'Pillaiyar Koil'},
    {name: 'Bharathi Nagar'},
    {name: 'Baby Nagar'},
    {name: 'Tansi Nagar'},
    {name: 'Dhandeeswaram'},
    {name: 'Dhandeeswaram Tank / Gandhi Road'},
    {name: 'Guru Nanak College'},
    {name: 'Velachery Check Post'},
    {name: 'Guindy Race Course (Kannagipuram)'},
    {name: 'Chellammal College'},
    {name: 'Guindy Industrial Estate'},
    {name: 'S.I.P.C.O.T. (Olympia / Tech Park)'},
    {name: 'Ekkattuthangal'},
    {name: 'Kalaimagal Nagar (Jaya TV)'},
    {name: 'Kasi Theatre (BSNL)'},
    {name: 'B.S.N.L. (Kasi Theatre)'},
    {name: 'Udhayam Theatre (Ashok Pillar)'},
    {name: 'Ashok Nagar Canara Bank'},
    {name: 'Vadapalani'},
    {name: 'Thirunagar'},
    {name: 'M.M.D.A. (Arumbakkam)'},
    {name: 'C.M.B.T'},
  ];

  const stops91 = [
    { name: 'Thiruvanmiyur' },
    { name: 'L.B. Road Jayanthi Theatre' },
    { name: 'S.R.P. Tool' },
    { name: 'I.G.P.' },
    { name: 'Kandanchavadi' },
    { name: 'Perungudi' },
    { name: 'Seevaram' },
    { name: '230 K.V. Tower' },
    { name: 'Kamatchi Hospital' },
    { name: 'Kamachi Memorial Hospital' },
    { name: 'Sunnambu Kolathur' },
    { name: 'Eachankadu Junction' },
    { name: 'D.J. Mat. School' },
    { name: 'Vels University' },
    { name: 'Pallavaram New Bridge' },
    { name: 'Chromepet' },
    { name: 'Chromepet MIT Flyover' },
    { name: 'Tambaram Sanatorium' },
    { name: 'Mepz' },
    { name: 'Kadaperi' },
    { name: 'Tambaram' },
  ];
   
  const stops95 = [
    { name: 'Tambaram East' },
    { name: 'East Tambaram Convent' },
    { name: 'Aathi Nagar' },
    { name: 'Selaiyur' },
    { name: 'Camp Road Junction Selaiyur' },
    { name: 'Kamarajapuram' },
    { name: 'Sembakkam' },
    { name: 'S.I.V.E.T.' },
    { name: 'Santhosh Puram' },
    { name: 'Medavakkam Koot Road' },
    { name: 'Medavakkam Junction' },
    { name: 'Pallavan Nagar' },
    { name: 'Perumbakkam Limit' },
    { name: 'Junction Of Perumbakkam & Nookam Village' },
    { name: 'Global Hospital' },
    { name: 'Toll Gate' },
    { name: 'Pudhu Nagar' },
    { name: 'Sholinganallur' },
    { name: 'Accenture' },
    { name: 'Karapakkam' },
    { name: 'Okkiyampet' },
    { name: 'Rattha Tech Tower' },
    { name: 'D.B. Jain College' },
    { name: 'Seevaram' },
    { name: 'Perungudi' },
    { name: 'Kandanchavadi' },
    { name: 'I.G.P.' },
    { name: 'S.R.P. Tool' },
    { name: 'L.B. Road' },
  ];
   
  const stops47D = [
    { name: 'Avadi' },
    { name: 'Tube Products of India' },
    { name: 'Murugappa Polytechnic' },
    { name: 'Vaishnavi Nagar' },
    { name: 'Thirumullaivoyal' },
    { name: 'Manikandapuram' },
    { name: 'Vivekananda School' },
    { name: 'Stedford Hospital' },
    { name: 'Ambattur O.T Bus Stand' },
    { name: 'T.I School' },
    { name: 'Ulavar Sandhai' },
    { name: 'Canara Bank' },
    { name: 'Ladies Police Station' },
    { name: 'Dunlop' },
    { name: 'Telephone Exchange' },
    { name: 'Ambattur I.T.I.' },
    { name: 'Ambattur I.T. Park' },
    { name: 'Mogaipair Road Junction' },
    { name: 'Wavin' },
    { name: 'T.S. Krishna Nagar' },
    { name: 'Collector Nagar' },
    { name: '12th Main Road' },
    { name: 'Anna Nagar Colony' },
    { name: 'Anna Nagar Roundtana' },
    { name: 'Aminjikarai' },
    { name: 'Brindavan Colony' },
    { name: 'Arun Hotel / Ampa Skywalk' },
    { name: 'Arun Hotel' },
    { name: 'Mehta Nagar' },
    { name: 'Choolaimedu Bus Stand' },
    { name: 'Loyola College' },
    { name: 'Sterling Road (Chetpat)' },
    { name: 'Nungambakkam Police Station' },
    { name: 'Corporation School Office' },
    { name: 'Valluvar Kottam' },
    { name: 'Vidyodaya School' },
    { name: 'Telegraph Office' },
    { name: 'Pondy Bazar' },
    { name: 'Holy Angels School (Power House)' },
    { name: 'Alayamman Temple' },
    { name: 'S.I.E.T College' },
    { name: 'Defence Quarters' },
    { name: 'Y.M.C.A. Nandanam (Nandanam)' },
    { name: 'Saidapet (Teachers Training College)' },
    { name: 'Saidapet' },
    { name: 'Saidapet Court / Taluka Office Road' },
    { name: 'Chinna Malai' },
    { name: 'Anna University' },
    { name: 'C.L.R.I.' },
    { name: 'Madhya Kailash Bus Stop' },
    { name: 'Gandhi Nagar' },
    { name: 'Adyar Old Depot' },
    { name: 'Adayar O.T' },
    { name: 'Adyar Depot' },
    { name: 'Jayanthi Theatre' },
    { name: 'Thiruvanmiyur' }
  ];
  

  const stopsA1 = [
    { name: 'Thiruvanmiyur' },
    { name: 'Jayanthi Theatre' },
    { name: 'Adyar Depot' },
    { name: 'Telephone Exchange' },
    { name: 'Adayar O.T.' },
    { name: 'Adyar Malar Hospital' },
    { name: 'Andhra Mahila Sabha Hospital (Sathya Studios)' },
    { name: 'R.K. Mutt Road' },
    { name: 'Rani Meyyammai School' },
    { name: 'Mandaveli' },
    { name: 'Mandaveli Market' },
    { name: 'Ramakrishna Madam' },
    { name: 'Mylapore Tank' },
    { name: 'Luz Church' },
    { name: 'Thiruvalluvar Statue' },
    { name: 'Hotel Ajantha (Earlish Lab)' },
    { name: 'Hotel Swageth' },
    { name: 'Royapettah Hospital' },
    { name: 'Wesley School' },
    { name: 'L.I.C.' },
    { name: 'Mount Road Post Office' },
    { name: 'The Hindu' },
    { name: 'Pallavan Salai (Bus Depot)' },
    { name: 'Central Station' },
    { name: 'Central Railway Station' }
  ];
  
  const renderStops = busNumber => {
    switch (busNumber) {
      case '102':
        return renderBusStops('102', stops102);
      case '570s':
        return renderBusStops('570s', stops570s);
        case '91':
        return renderBusStops('91', stops91);
        case '95':
          return renderBusStops('95', stops95);
          case '47D':
          return renderBusStops('47D', stops47D);
          case 'A1':
            return renderBusStops('A1', stopsA1);
      default:
        return null;
    }
  };

  const renderBusStops = (busNumber, stops) => (
    <ScrollView style={styles.stopList}>
      {stops.map((stop, index) => (
        <TouchableOpacity key={index} style={styles.stopItem}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="bus" size={24} color="#007bff" />
          </View>
          <View style={styles.stopTextContainer}>
            <Text style={styles.stopName}>{stop.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderBusInfo = busNumber => {
    switch (busNumber) {
      case '102':
        return (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Route: Broadway to Kelambakkam</Text>
            <Text style={styles.infoText}>Frequency: Every 15 minutes</Text>
          </View>
        );
        case 'A1':
        return (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Route: Thiruvanmiyur to Central Railway Station</Text>
            <Text style={styles.infoText}>Frequency: Every 15 minutes</Text>
          </View>
        );
      case '570s':
        return (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Route:  Kelambakkam to C.M.B.T</Text>
            <Text style={styles.infoText}>Frequency: Every 20 minutes</Text>
          </View>
        );
        case '91':
        return (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Route:Thiruvanmiyur to Tambaram</Text>
            <Text style={styles.infoText}>Frequency: Every 15 minutes</Text>
          </View>
        );
        case '95':
          return (
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Route:Tambaram East to L.B. Road</Text>
              <Text style={styles.infoText}>Frequency: Every 20 minutes</Text>
            </View>
          );
          case '47D':
            return (
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Route:Avadi to Thiruvanmiyur</Text>
                <Text style={styles.infoText}>Frequency: Every 30 minutes</Text>
              </View>
            );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bus Route {selectedBus || ''} 
      </Text>
      {/* <TouchableOpacity
        onPress={() => handleBusPress('A1')}
        style={[
          styles.busButton,
          selectedBus === 'A1' && styles.selectedButton,
        ]}>
        <Text style={styles.busNumber}>A1</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => handleBusPress('47D')}
        style={[
          styles.busButton,
          selectedBus === '47D' && styles.selectedButton,
        ]}>
        <Text style={styles.busNumber}>47D</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleBusPress('91')}
        style={[
          styles.busButton,
          selectedBus === '91' && styles.selectedButton,
        ]}>
        <Text style={styles.busNumber}>91</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleBusPress('95')}
        style={[
          styles.busButton,
          selectedBus === '95' && styles.selectedButton,
        ]}>
        <Text style={styles.busNumber}>95</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleBusPress('102')}
        style={[
          styles.busButton,
          selectedBus === '102' && styles.selectedButton,
        ]}>
        <Text style={styles.busNumber}>102</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleBusPress('570s')}
        style={[
          styles.busButton,
          selectedBus === '570s' && styles.selectedButton,
        ]}>
        <Text style={styles.busNumber}>570s</Text>
      </TouchableOpacity>
      {selectedBus && renderBusInfo(selectedBus)}
      {selectedBus && renderStops(selectedBus)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  stopList: {
    width: '100%',
    maxHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor:'black',
    borderWidth:2,
  },
  stopItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 20,
  },
  stopTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stopName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  busButton: {
    marginBottom: 10,
    backgroundColor: '#64B5F6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'black',
  },
  selectedButton: {
    backgroundColor: '#1976D2',
  },
  busNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor:'#4CAF50',
    borderWidth:2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default RouteScreen;
