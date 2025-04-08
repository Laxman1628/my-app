import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

// Centralized static labels
const LABELS = {
    title: 'Hello Adrian!',
    subtitle: 'Tell us more about you..',
    genderLabel: 'Select your gender',
    ageLabel: 'Age',
    weightLabel: 'Weight',
    heightLabel: 'Height',
    continueText: 'Continue',
    genderOptions: ['Male', 'Female'],
    weightUnits: ['KG', 'LB'],
    heightUnits: ['CM', 'FT'],
    agePlaceholder: 'Enter age',
    weightPlaceholder: 'Kg',
    heightPlaceholder: 'Ft In',
};

export default function UserInfoScreen() {
    // Logic (State Management)
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('KG');
    const [height, setHeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('FT');

    const handleContinue = () => {
        console.log({
            gender,
            age,
            weight: `${weight} ${weightUnit}`,
            height: `${height} ${heightUnit}`,
        });
    };

    // UI
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{LABELS.title}</Text>
            <Text style={styles.subtitle}>{LABELS.subtitle}</Text>

            <Text style={styles.label}>{LABELS.genderLabel}</Text>
            <View style={styles.genderContainer}>
                {LABELS.genderOptions.map(g => (
                    <TouchableOpacity
                        key={g}
                        style={[styles.genderBox, gender === g && styles.genderSelected]}
                        onPress={() => setGender(g)}>
                        <Text>{g}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>{LABELS.ageLabel}</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={age}
                    onChangeText={setAge}
                    placeholder={LABELS.agePlaceholder}
                />
            </View>

            <Text style={styles.label}>{LABELS.weightLabel}</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                    placeholder={LABELS.weightPlaceholder}
                />
                <View style={styles.unitContainer}>
                    {LABELS.weightUnits.map(unit => (
                        <TouchableOpacity
                            key={unit}
                            style={[
                                styles.unitBtn,
                                weightUnit === unit && styles.unitSelected,
                            ]}
                            onPress={() => setWeightUnit(unit)}>
                            <Text>{unit}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <Text style={styles.label}>{LABELS.heightLabel}</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    value={height}
                    onChangeText={setHeight}
                    placeholder={LABELS.heightPlaceholder}
                />
                <View style={styles.unitContainer}>
                    {LABELS.heightUnits.map(unit => (
                        <TouchableOpacity
                            key={unit}
                            style={[
                                styles.unitBtn,
                                heightUnit === unit && styles.unitSelected,
                            ]}
                            onPress={() => setHeightUnit(unit)}>
                            <Text>{unit}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
                <Text style={styles.continueText}>{LABELS.continueText}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {padding: 20, backgroundColor: 'white', flex: 1},
    title: {fontSize: 20, fontWeight: 'bold', marginBottom: 6},
    subtitle: {fontSize: 16, marginBottom: 20},
    label: {marginTop: 10, marginBottom: 5, fontWeight: '600'},
    genderContainer: {flexDirection: 'row', gap: 10},
    AgeContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: '600',
    },
    genderBox: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        borderRadius: 8,
    },
    genderSelected: {borderColor: '#7CFC00', backgroundColor: '#E8FFE8'},
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    row: {flexDirection: 'row', alignItems: 'center', gap: 10},
    unitContainer: {flexDirection: 'row', gap: 5, border: 1, borderColor: '#ccc', borderRadius: 8},
    unitBtn: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
    },
    unitSelected: {borderColor: '#7CFC00', backgroundColor: '#E8FFE8'},
    continueBtn: {
        marginTop: 30,
        backgroundColor: '#BFFF00',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    continueText: {fontWeight: 'bold'},
});
