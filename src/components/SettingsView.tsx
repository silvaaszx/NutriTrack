import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsView: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [weeklyReport, setWeeklyReport] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>PREFERENCES</Text>
      
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.rowText}>Push Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#d3d3d3', true: '#4CAF50' }}
            ios_backgroundColor="#d3d3d3"
          />
        </View>
        <View style={styles.divider} />
        
        <View style={styles.row}>
          <Text style={styles.rowText}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#d3d3d3', true: '#4CAF50' }}
            ios_backgroundColor="#d3d3d3"
          />
        </View>
        <View style={styles.divider} />

        <View style={[styles.row, { borderBottomWidth: 0 }]}>
          <Text style={styles.rowText}>Weekly Report</Text>
          <Switch
            value={weeklyReport}
            onValueChange={setWeeklyReport}
            trackColor={{ false: '#d3d3d3', true: '#4CAF50' }}
            ios_backgroundColor="#d3d3d3"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default SettingsView;
