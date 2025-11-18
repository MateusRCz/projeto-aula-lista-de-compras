import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function SplashScreen({ onDismiss }) {
  const translateY = useRef(new Animated.Value(0)).current;
  const [isExpanded, setIsExpanded] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy < 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < -100 || gestureState.vy < -0.3) {
          // Expande
          Animated.spring(translateY, {
            toValue: -300,
            useNativeDriver: true,
          }).start(() => setIsExpanded(true));
        } else {
          // Volta
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start(() => setIsExpanded(false));
        }
      },
    })
  ).current;

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <View style={styles.container}>
      {/* Overlay escuro */}
      <View
        style={[
          styles.overlay,
          {
            opacity: isExpanded ? 0.3 : 0,
          },
        ]}
      />

      {/* Bottom Sheet */}
      <Animated.View
        style={[
          styles.sheet,
          {
            transform: [{ translateY }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        {/* Handle bar */}
        <View style={styles.handleContainer}>
          <View style={styles.handleBar} />
        </View>

        {/* Conteúdo */}
        <View style={styles.content}>
          <MaterialCommunityIcons
            name="shopping-cart"
            size={80}
            color="#F5A623"
          />
          <Text style={styles.title}>Iniciar</Text>
          <Text style={styles.subtitle}>Arraste para cima ou clique</Text>
        </View>

        {/* Botão para expandir/começar */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleDismiss}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5A623',
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  sheet: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    minHeight: screenHeight * 0.5,
    maxHeight: screenHeight * 0.9,
  },
  handleContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  handleBar: {
    width: 50,
    height: 5,
    backgroundColor: '#DDD',
    borderRadius: 2.5,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#F5A623',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
