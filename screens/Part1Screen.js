import React from 'react';
import { View, Button, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window'); // Lấy chiều rộng của màn hình hiện tại

const Part1Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phần 1: Thiết lập độ rộng động & Sử dụng Dimensions API</Text>
      <View style={[styles.buttonContainer, { width: width / 2 - 20 }]}>
        <Button title="Nút 1" onPress={() => {}} />
      </View>
      <View style={[styles.buttonContainer, { width: width / 2 - 20 }]}>
        <Button title="Nút 2" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    margin: 10,
  },
});

export default Part1Screen;
