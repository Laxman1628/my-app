import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

const sliderWidth = screenWidth;
const itemWidth = screenWidth * 0.8; // Adjust as needed

const EventsScreen = () => {
  const [entries, setEntries] = useState([
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
  ]);

  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    if (!item) return null; // Prevent rendering issues if item is undefined
  
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={entries}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    backgroundColor: "#ddd",
    borderRadius: 10,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default EventsScreen;
