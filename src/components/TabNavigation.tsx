import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabItem } from '../types';

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab?: string;
  onTabPress?: (label: string) => void;
}

/**
 * Horizontal tab bar with an active indicator (green underline).
 */
const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isCurrentActive = activeTab ? activeTab === tab.label : tab.isActive;
        return (
          <TouchableOpacity
            key={tab.label}
            style={styles.tab}
            onPress={() => onTabPress?.(tab.label)}
            activeOpacity={0.7}
          >
            <View style={styles.tabContent}>
              <Text style={[styles.tabText, isCurrentActive && styles.activeTabText]}>
                {tab.label}
              </Text>
              {isCurrentActive && <View style={styles.activeIndicator} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8', // Light gray divider like mock
    paddingBottom: 0,
    paddingHorizontal: 8,
  },
  tab: {
    paddingVertical: 14,
    alignItems: 'center',
    flex: 1,
  },
  tabContent: {
    position: 'relative',
    alignItems: 'center',
    paddingBottom: 4, // Spacing before indicator
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#999',
    letterSpacing: 0.5,
  },
  activeTabText: {
    color: '#4CAF50',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -15, // Push down to overlap the container border
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#4CAF50',
    borderRadius: 1.5,
  },
});

export default TabNavigation;
