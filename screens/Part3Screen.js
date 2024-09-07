import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

const Part3Screen = () => {
  const [orientation, setOrientation] = useState('portrait');
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // Hàm cập nhật hướng màn hình
    const updateOrientation = () => {
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    // Cập nhật orientation ban đầu
    updateOrientation();

    // Lắng nghe sự thay đổi kích thước màn hình
    const subscription = Dimensions.addEventListener('change', updateOrientation);

    // Cleanup listener khi component unmount
    return () => subscription?.remove();
  }, [width, height]); // Chỉ chạy lại khi width hoặc height thay đổi

  return (
    <View style={orientation === 'portrait' ? styles.portraitContainer : styles.landscapeContainer}>
      <View style={styles.buttonContainer}>
        <Button title="Nút 1" onPress={() => console.log('Nút 1 được nhấn')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Nút 2" onPress={() => console.log('Nút 2 được nhấn')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Nút 3" onPress={() => console.log('Nút 3 được nhấn')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Xếp chồng nút theo chiều dọc khi ở chế độ dọc
  },
  landscapeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Xếp các nút theo hàng ngang khi ở chế độ ngang
  },
  buttonContainer: {
    margin: 10, // Khoảng cách giữa các nút
  },
});

export default Part3Screen;
