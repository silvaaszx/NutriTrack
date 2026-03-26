import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface LogFoodButtonProps {
  onPress?: () => void;
}

/**
 * Bottom "LOG FOOD" call-to-action button with coral/red styling.
 */
const LogFoodButton: React.FC<LogFoodButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>LOG FOOD</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignSelf: 'center',
    marginVertical: 20,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default LogFoodButton;
