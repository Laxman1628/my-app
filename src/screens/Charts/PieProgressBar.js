

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';
import Svg from 'react-native-svg';

const PieProgressBar = ({ percentage = 80 }) => {
  const completed = percentage;
  const remaining = 100 - percentage;

  return (
    <View style={styles.container}>
      <Svg width={200} height={200}>
        <VictoryPie
          standalone={false}
          width={200}
          height={200}
          data={[
            { x: 'Completed', y: completed },
            { x: 'Remaining', y: remaining },
          ]}
          innerRadius={35}
          cornerRadius={15}
          labels={() => null}
          colorScale={['#000', '#fff7b3']} // Adjust colors to match your theme
          startAngle={0}
          endAngle={360}
        />
      </Svg>
      <View style={styles.labelContainer}>
        <Text style={styles.percentageText}>{`${completed}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000', // Match inner text color
  },
});

export default PieProgressBar;
