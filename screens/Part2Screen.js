import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

const Part2Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phần 2: Điều chỉnh kích thước hình ảnh</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' }}
        style={{
          width: width * 0.8,
          height: (width * 0.8) * 0.6,
          resizeMode: 'contain',
        }}
      />
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
});

export default Part2Screen;
