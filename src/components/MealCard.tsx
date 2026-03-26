import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MealItem } from '../types';

interface MealCardProps {
  meal: MealItem;
}

/**
 * Card displaying a meal with its food items and total calorie count.
 */
const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.foodsContainer}>
        {meal.foods.map((food, index) => (
          <Text 
            key={index} 
            style={[styles.foodText, index === 0 ? styles.firstFoodRow : styles.subFoodRow]}
          >
            {food}
          </Text>
        ))}
      </View>
      <Text style={styles.calories}>{meal.calories} kcal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  foodsContainer: {
    flex: 1,
  },
  foodText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 2,
  },
  firstFoodRow: {
    color: '#333',
    fontWeight: '500', // Slightly heavier like the mock
  },
  subFoodRow: {
    color: '#777', // Gray color for 2% Milk, Almonds
    fontWeight: '400',
  },
  calories: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    marginLeft: 12,
  },
});

export default MealCard;
