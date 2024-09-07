import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Part5Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phần 5: Thiết kế cho chế độ ngang</Text>
      <Text style={styles.text}>Trong chế độ ngang, điều chỉnh giao diện để hiển thị tốt hơn.</Text>
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
  text: {
    fontSize: 16,
  },
});

export default Part5Screen;
