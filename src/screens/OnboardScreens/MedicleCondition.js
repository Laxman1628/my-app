import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const labels = {
    heading: 'Do you have any medical conditions or physical limitations that we should be aware of?',
    medicalOptions: [
        'Diabetes',
        'Heart conditions',
        'Joint problems',
        'Asthma',
        'Other health concerns',
    ],
    otherPlaceholder: 'If Other, please specify',
    continueButton: 'Continue',
};

export default function MedicalCondition() {
    const [selectedConditions, setSelectedConditions] = useState([]);
    const [otherCondition, setOtherCondition] = useState('');

    const toggleCondition = item => {
        if (selectedConditions.includes(item)) {
            setSelectedConditions(selectedConditions.filter(x => x !== item));
        } else {
            setSelectedConditions([...selectedConditions, item]);
        }
    };

    const handleContinue = () =>
        console.log('Conditions:', selectedConditions, 'Other:', otherCondition);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[styles.heading, {marginTop: 40}]}>{labels.heading}</Text>
                {labels.medicalOptions.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionBox,
                            selectedConditions.includes(item) && styles.optionSelected,
                        ]}
                        onPress={() => toggleCondition(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}

                {selectedConditions.includes('Other health concerns') && (
                    <TextInput
                        placeholder={labels.otherPlaceholder}
                        style={styles.input}
                        value={otherCondition}
                        onChangeText={setOtherCondition}
                    />
                )}

                <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
                    <Text style={styles.continueText}>{labels.continueButton}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff', padding: 20},
    heading: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
    optionBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    optionSelected: {
        borderColor: '#00cc00',
        backgroundColor: '#eaffea',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    continueBtn: {
        backgroundColor: '#BFFF00',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    continueText: {fontWeight: 'bold'},
});
