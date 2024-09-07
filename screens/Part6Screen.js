import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, useWindowDimensions, ScrollView } from 'react-native';

const Part6Screen = () => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState(width > height ? 'landscape' : 'portrait');

  useEffect(() => {
    setOrientation(width > height ? 'landscape' : 'portrait');
  }, [width, height]);

  // Hàm lấy kiểu dáng riêng biệt cho từng nền tảng
  const getPlatformSpecificStyles = () => {
    const baseSize = Math.min(width, height) * 0.1;
    return StyleSheet.create({
      container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: baseSize, // Đệm ngang cho container
        paddingVertical: baseSize * 0.5, // Đệm dọc cho container
        ...Platform.select({
          ios: {
            backgroundColor: '#f0f0f0',
          },
          android: {
            backgroundColor: '#d0f0d0',
          },
        }),
      },
      boxContainer: {
        flexDirection: orientation === 'portrait' ? 'column' : 'row', // Xếp chồng dọc khi ở chế độ dọc, ngang khi ở chế độ ngang
        flexWrap: 'wrap', // Cho phép các phần tử tự động xuống dòng
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%', // Chiều rộng đầy đủ cho bố cục
      },
      box: {
        width: orientation === 'portrait' ? '90%' : '45%', // Điều chỉnh chiều rộng hộp dựa trên hướng màn hình
        aspectRatio: 1,
        marginBottom: baseSize * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            backgroundColor: '#3498db', // Màu nền riêng cho iOS
            borderRadius: 10,           // Độ bo tròn cho iOS
            padding: baseSize * 0.2,    // Đệm thêm cho iOS
          },
          android: {
            backgroundColor: '#2ecc71', // Màu nền riêng cho Android
            borderRadius: 5,            // Độ bo tròn cho Android
            padding: baseSize * 0.1,    // Đệm ít hơn cho Android
          },
        }),
      },
      text: {
        fontSize: baseSize * 0.4,
        color: 'white',
        textAlign: 'center',
        ...Platform.select({
          ios: {
            fontWeight: '600', // Kiểu chữ đậm vừa cho iOS
          },
          android: {
            fontWeight: 'bold', // Kiểu chữ đậm cho Android
          },
        }),
      },
      infoText: {
        fontSize: baseSize * 0.4,
        color: 'black',
        textAlign: 'center',
        marginTop: baseSize * 0.5,
        paddingHorizontal: baseSize * 0.5,
      },
    });
  };

  const styles = getPlatformSpecificStyles();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.text}>Box 1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Box 2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Box 3</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Box 4</Text>
        </View>
      </View>
      <Text style={styles.infoText}>
        Platform: {Platform.OS}{'\n'}
        Orientation: {orientation}{'\n'}
        Screen Width: {width.toFixed(0)}{'\n'}
        Screen Height: {height.toFixed(0)}
      </Text>
    </ScrollView>
  );
};

export default Part6Screen;
