import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    
} from 'react-native';
import React, {useState} from 'react';

const LABELS = {
    heading: 'What is your preferred workout environment?',
    environments: ['Home', 'Gym', 'Outdoors'],
    continue: 'Continue',
};

export default function Environment() {
    // Single-select: Environment
    const [selectedEnvironment, setSelectedEnvironment] = useState(null);

    const handleContinue = () => console.log('Environment:', selectedEnvironment);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* === Screen 3: Workout Environment === */}
                <Text style={[styles.heading, {marginTop: 40}]}>{LABELS.heading}</Text>
                {LABELS.environments.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionBox,
                            selectedEnvironment === item && styles.optionSelected,
                        ]}
                        onPress={() => setSelectedEnvironment(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
                    <Text style={styles.continueText}>{LABELS.continue}</Text>
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
