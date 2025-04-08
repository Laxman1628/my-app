import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';

const labels = {
    heading: 'What motivates you to stay active?',
    options: [
        'Setting and achieving goals',
        'Social accountability',
        'Tracking progress',
        'Competing with others',
        'Enjoyment of the activity',
    ],
    continue: 'Continue',
};

export default function MotivationScreen() {
    const [selected, setSelected] = useState([]);

    const toggleOption = (option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter((item) => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    const handleContinue = () => {
        console.log('Selected motivations:', selected);
        // navigation logic here
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.heading}>{labels.heading}</Text>

                {labels.options.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionRow}
                        onPress={() => toggleOption(item)}
                    >
                        <View style={[styles.checkbox, selected.includes(item) && styles.checkedBox]} />
                        <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
                    <Text style={styles.continueText}>{labels.continue}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    scrollContent: { padding: 20 },
    heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 12,
    },
    checkedBox: {
        backgroundColor: '#BFFF00',
        borderColor: '#BFFF00',
    },
    optionText: { fontSize: 16 },
    continueBtn: {
        backgroundColor: '#BFFF00',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    continueText: { fontWeight: 'bold' },
});
