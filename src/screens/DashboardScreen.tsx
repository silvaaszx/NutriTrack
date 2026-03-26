import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { dailyProgress, meals, tabs } from '../data/mockData';
import NutrientSummary from '../components/NutrientSummary';
import TabNavigation from '../components/TabNavigation';
import MealCard from '../components/MealCard';
import AddMealButton from '../components/AddMealButton';
import LogFoodButton from '../components/LogFoodButton';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F5E9" />

      {/* Container principal */}
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topSection}>
            {/* Ajuste fino: Adicionado a hora para ficar igual ao mockup */}
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>SUN, FEB 1</Text>
            </View>

            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.appName}>
                NutriTrack{' '}
                <MaterialCommunityIcons name="leaf" size={24} color="#4CAF50" />
              </Text>
            </View>

            {/* Aqui é onde a mágica (e os bugs atuais) acontecem! */}
            <NutrientSummary progress={dailyProgress} />

            <TabNavigation tabs={tabs} />
          </View>

          <View style={styles.mealsSection}>
            <Text style={styles.sectionTitle}>MEALS</Text>

            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}

            <AddMealButton />
          </View>
        </ScrollView>

        {/* Botão flutuante ajustado */}
        <View style={styles.bottomCtaContainer}>
          <LogFoodButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Cor verde do topo
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fundo cinza claro que fica por trás das refeições
  },
  topSection: {
    backgroundColor: '#E8F5E9',
    paddingBottom: 0,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120, // Espaço extra para o botão Log Food não cobrir os itens
  },
  dateContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 0, // Pushed higher up to sit under native clock
    left: 20,
    zIndex: 10,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 0.5,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  appName: {
    fontSize: 30, // Título maior como pedido
    fontWeight: '700',
    color: '#111',
  },
  mealsSection: {
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
  bottomCtaContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 20, // Levanta mais no iOS por causa da barra inferior
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default DashboardScreen;