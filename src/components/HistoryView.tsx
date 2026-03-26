import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealCard from './MealCard';

import { MealItem } from '../types';

export const pastMeals: MealItem[] = [
  {
    id: 'past-1',
    foods: ['Yesterday\'s Pasta', 'Whole Wheat Pasta', 'Tomato Sauce', 'Parmesan'],
    calories: 600,
  },
  {
    id: 'past-2',
    foods: ['Avocado Toast', 'Sourdough Bread', 'Avocado', 'Poached Egg'],
    calories: 320,
  },
];

const HistoryView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>PAST MEALS</Text>
      {pastMeals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginLeft: 20,
    marginBottom: 12,
    letterSpacing: 1,
  },
});

export default HistoryView;
