import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MacroNutrient } from '../types';

interface MacroProgressBarProps {
  macro: MacroNutrient;
}

const MacroProgressBar: React.FC<MacroProgressBarProps> = ({ macro }) => {
  // Cálculo de progresso garantindo que não passe de 100% para o visual
  const progress = Math.min((macro.current / macro.goal) * 100, 100);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{macro.name}</Text>

      <View style={styles.trackContainer}>
        {/* 'track' é a trilha de fundo (o cinza clarinho) */}
        <View style={styles.track}>
          {/* 'fill' é a barra de progresso (o verde escuro) */}
          <View
            style={[
              styles.fill,
              {
                width: `${progress}%`,
                backgroundColor: macro.color || '#4CAF50',
              },
            ]}
          />
        </View>
      </View>

      <Text style={styles.values}>
        {macro.current}{macro.unit} / {macro.goal}{macro.unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    width: 55,
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  trackContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  track: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(76, 175, 80, 0.2)', // Guaranteed visible background track
    borderRadius: 10, // Pill-shaped
    overflow: 'hidden', // Ensures fill is clipped properly
  },
  fill: {
    height: '100%',
    borderRadius: 10, // Arredondado também nas pontas internas
  },
  values: {
    width: 75,
    textAlign: 'right',
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
});

export default MacroProgressBar;