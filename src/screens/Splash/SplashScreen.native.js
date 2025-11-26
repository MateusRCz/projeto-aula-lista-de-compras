import React, { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, Animated,
  PanResponder, Dimensions, Pressable,
} from 'react-native';
import LottieView from 'lottie-react-native'; // IMPORT NATIVO

const { height: screenHeight } = Dimensions.get('window');

export default function SplashScreen({ onDismiss }) {
  // Fade-in animation
  const fadeIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }, []);

  // Slide-up animation
  const translateY = useRef(new Animated.Value(0)).current;
  const handleEnter = () => {
    Animated.parallel([
      Animated.timing(fadeIn, { toValue: 0, duration: 400, useNativeDriver: true }),
      Animated.spring(translateY, { toValue: -screenHeight, useNativeDriver: true, bounciness: 8 }),
    ]).start(() => {
      if (onDismiss) onDismiss();
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 8,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy < 0) translateY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -80 || gestureState.vy < -0.19) handleEnter();
        else Animated.spring(translateY, { toValue: 0, useNativeDriver: true }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          { opacity: fadeIn, transform: [{ translateY }] }
        ]}
        {...panResponder.panHandlers}
      >
        <Pressable style={{ flex: 1 }} onPress={handleEnter}>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <LottieView
              source={require("../../assets/cart.json")} // Seu asset
              autoPlay loop style={{ width: 130, height: 130, marginTop: 45 }}
            />
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.subtitle}>Arraste para cima ou toque na tela</Text>
            <LottieView
              source={require("../../assets/arrow-up.json")}
              autoPlay loop style={{ width: 60, height: 60, marginTop: 18 }}
            />
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5A623', justifyContent: 'center', alignItems: 'center' },
  content: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: "900", color: "#fff", marginTop: 18, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#fff", marginTop: 10, opacity: 0.9, textAlign: "center" }
});
