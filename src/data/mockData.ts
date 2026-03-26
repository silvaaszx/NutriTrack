import { DailyProgress, MealItem, TabItem } from '../types';

/**
 * Mock daily nutrition progress data matching the mockup.
 */
export const dailyProgress: DailyProgress = {
  caloriesConsumed: 500,
  caloriesGoal: 2000,
  macros: [
    {
      name: 'Protein',
      current: 80,
      goal: 120,
      unit: 'g',
      color: '#4CAF50',
    },
    {
      name: 'Carbs',
      current: 200,
      goal: 250,
      unit: 'g',
      color: '#4CAF50',
    },
    {
      name: 'Fat',
      current: 50,
      goal: 70,
      unit: 'g',
      color: '#4CAF50',
    },
  ],
};

/**
 * Mock meals data matching the mockup.
 */
export const meals: MealItem[] = [
  {
    id: '1',
    foods: ['Oatmeal with berries', '2% Milk', 'Almonds'],
    calories: 380,
  },
  {
    id: '2',
    foods: ['Grilled Chicken Salad', 'Whole Wheat Bread', 'Olive Oil Dressing'],
    calories: 450,
  },
];

/**
 * Mock tab items for the tab navigation.
 */
export const tabs: TabItem[] = [
  { label: 'TODAY', isActive: true },
  { label: 'HISTORY', isActive: false },
  { label: 'FOODS', isActive: false },
  { label: 'SETTINGS', isActive: false },
];
