import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useState} from 'react';

// Define all static labels in a constants object
const LABELS = {
    heading: 'Choose your belly condition',
    subText: 'Knowing your goals helps us tailor your experience',
    bellyOptions: ['Belly 1', 'Belly 2', 'Belly 3', 'Belly 4', 'Belly 5'],
    continueButton: 'Continue',
};

export default function BellyCondition() {
    const [selectedBelly, setSelectedBelly] = useState(null);

    const handleContinue = () => {
        console.log('Selected Belly Condition:', selectedBelly);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                {/* === Belly Condition Section === */}
                <Text style={[styles.heading, {marginTop: 40}]}>{LABELS.heading}</Text>
                <Text style={styles.subText}>{LABELS.subText}</Text>

                <View style={styles.bellyGrid}>
                    {LABELS.bellyOptions.map((label, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedBelly(index)}
                            style={[
                                styles.bellyBox,
                                selectedBelly === index && styles.bellySelected,
                            ]}>
                            <Text>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
                    <Text style={styles.continueText}>{LABELS.continueButton}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff', padding: 20},
    heading: {fontSize: 20, fontWeight: 'bold', marginTop: 20},
    subText: {fontSize: 14, color: '#666', marginBottom: 15},
    continueBtn: {
        backgroundColor: '#BFFF00',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    continueText: {fontWeight: 'bold'},
    bellyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
        gap: 10,
    },
    bellyBox: {
        width: '45%',
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
