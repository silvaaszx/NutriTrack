/**
 * TypeScript interfaces for the NutriTrack nutrition dashboard.
 */

export interface MacroNutrient {
  name: string;
  current: number;
  goal: number;
  unit: string;
  color: string;
}

export interface MealItem {
  id: string;
  foods: string[];
  calories: number;
}

export interface DailyProgress {
  caloriesConsumed: number;
  caloriesGoal: number;
  macros: MacroNutrient[];
}

export interface TabItem {
  label: string;
  isActive: boolean;
}
