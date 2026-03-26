import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DailyProgress } from '../types';
import CircularProgress from './CircularProgress';
import MacroProgressBar from './MacroProgressBar';

interface NutrientSummaryProps {
  progress: DailyProgress;
}

/**
 * Combines the circular calorie ring with macro progress bars
 * in a green-tinted summary card.
 */
const NutrientSummary: React.FC<NutrientSummaryProps> = ({ progress }) => {
  const { caloriesConsumed, caloriesGoal, macros } = progress;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CircularProgress consumed={caloriesConsumed} goal={caloriesGoal} />

        <View style={styles.macrosContainer}>
          {macros.map((macro) => (
            <MacroProgressBar key={macro.name} macro={macro} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  macrosContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
});

export default NutrientSummary;
