import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {['Phần 1', 'Phần 2', 'Phần 3', 'Phần 4', 'Phần 5', 'Phần 6', 'Phần 7'].map((section) => (
        <TouchableOpacity
          key={section}
          style={styles.button}
          onPress={() => navigation.navigate(section)} // Chuyển đến màn hình tương ứng khi nhấn
        >
          <Text style={styles.buttonText}>{section}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
