import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, useWindowDimensions, Platform, Text } from 'react-native';

const Part7Screen = () => {
  const { width, height } = useWindowDimensions();  // Sử dụng useWindowDimensions hook
  const [orientation, setOrientation] = useState(width > height ? 'landscape' : 'portrait');

  // Cập nhật hướng màn hình khi kích thước thay đổi
  useEffect(() => {
    setOrientation(width > height ? 'landscape' : 'portrait');
  }, [width, height]);

  // Hàm lấy kiểu chữ thanh trạng thái tùy thuộc nền tảng và hướng màn hình
  const getStatusBarStyle = () => {
    if (Platform.OS === 'ios') {
      return orientation === 'portrait' ? 'dark-content' : 'light-content';
    } else {
      // Android
      return orientation === 'portrait' ? 'light-content' : 'dark-content';
    }
  };

  // Hàm lấy màu nền của thanh trạng thái tùy thuộc nền tảng và hướng màn hình
  const getStatusBarBackgroundColor = () => {
    if (Platform.OS === 'ios') {
      return orientation === 'portrait' ? '#ffffff' : '#000000';
    } else {
      // Android
      return orientation === 'portrait' ? '#3498db' : '#f1c40f';
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getStatusBarBackgroundColor() }]}>
      {/* Tùy chỉnh giao diện thanh trạng thái */}
      <StatusBar
        backgroundColor={getStatusBarBackgroundColor()}
        barStyle={getStatusBarStyle()}
        animated={true}  // Hiệu ứng mượt khi thay đổi kiểu chữ và màu nền
      />
      {/* Nội dung hiển thị */}
      <View style={styles.content}>
        <Text style={styles.text}>Platform: {Platform.OS}</Text>
        <Text style={styles.text}>Orientation: {orientation}</Text>
        <Text style={styles.text}>StatusBar Style: {getStatusBarStyle()}</Text>
        <Text style={styles.text}>Background Color: {getStatusBarBackgroundColor()}</Text>
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
  content: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginVertical: 5,
  },
});

export default Part7Screen;
