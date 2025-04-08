import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

export default function ActivityAndBellyScreens() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedBelly, setSelectedBelly] = useState(null);

  const activityOptions = [
    {
      title: 'Sedentary',
      description: 'Little to almost no exercise',
    },
    {
      title: 'Slightly Active',
      description: 'Exercise up to 2 hours in a week',
    },
    {
      title: 'Moderately Active',
      description: 'Exercise up to 4 hours in a week',
    },
    {
      title: 'Very Active',
      description: 'Exercise for 4+ hours in a week',
    },
  ];



  const handleContinue = () => {
    console.log('Selected Activity:', selectedActivity);
    console.log('Selected Belly Condition:', selectedBelly);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* === Activity Level Section === */}
        <Text style={styles.heading}>What is your activity level?</Text>
        <Text style={styles.subText}>
          This helps us design your workouts to fit your lifestyle
        </Text>

        {activityOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.activityBox,
              selectedActivity === index && styles.activitySelected,
            ]}
            onPress={() => setSelectedActivity(index)}
          >
            <Text style={styles.activityTitle}>{option.title}</Text>
            <Text style={styles.activityDesc}>{option.description}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  subText: { fontSize: 14, color: '#666', marginBottom: 15 },
  activityBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  activitySelected: {
    borderColor: '#00cc00',
    backgroundColor: '#eaffea',
  },
  activityTitle: { fontWeight: 'bold', fontSize: 16 },
  activityDesc: { fontSize: 14, color: '#666', marginTop: 5 },
  continueBtn: {
    backgroundColor: '#BFFF00',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  continueText: { fontWeight: 'bold' },
  bellyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  bellyBox: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bellySelected: {
    borderColor: '#00cc00',
    backgroundColor: '#eaffea',
  },
});
