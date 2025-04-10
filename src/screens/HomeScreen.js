import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PieProgressBar from './Charts/PieProgressBar';
import {fontSize} from '../utils/Constants/Fonts';
import Colors from '../utils/Constants/Colors';

export default function HomeScreen({navigation}) {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#ffe501',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '300px',
          borderRadius: 15,
        }}>
        <View>
          <Text style={{fontsize: fontSize.xl, fontWeight: '600'}}>
            Daily Score
          </Text>
          <Text style={{color:Colors.gray}}><Text style={{color:Colors.Dark}}>4/7</Text> tasks completed</Text>
        </View>
        <View>
          <PieProgressBar />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5F5DC', // Coffee Beige Background
    padding: 20,
    backgroundColor:"#212121"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E', // Dark Brown
    marginTop: 20,
  },
  subHeader: {
    fontSize: 16,
    color: '#6D4C41', // Light Brown
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  coffeePrice: {
    fontSize: 16,
    color: '#6D4C41',
  },
});
