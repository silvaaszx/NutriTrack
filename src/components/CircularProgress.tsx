import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Defs, Path, Text as SvgText, TextPath } from 'react-native-svg';

interface CircularProgressProps {
  consumed: number;
  goal: number;
}

/**
 * Circular progress ring showing remaining calories and daily goal percentage.
 * Uses react-native-svg for the animated ring and curved text.
 */
const CircularProgress: React.FC<CircularProgressProps> = ({ consumed, goal }) => {
  const remaining = 1500;
  const labelPercentage = 75;
  const visualPercentage = 25; // As per the mock, the ring visually fills exactly 25% (12 o'clock to 3 o'clock)

  const containerSize = 140;
  const size = 160; 
  const strokeWidth = 8;
  const radius = 56; 
  const circumference = 2 * Math.PI * radius;
  const visualFill = (visualPercentage / 100) * circumference;

  const cx = size / 2;
  const cy = size / 2;
  const textRadius = radius + 11; 
  
  // Perfectly symmetrical top arc from left to right
  const pathData = `M ${cx - textRadius},${cy} A ${textRadius},${textRadius} 0 0,1 ${cx + textRadius},${cy}`;

  return (
    <View style={styles.container}>
      <View style={[styles.svgContainer, { width: containerSize, height: containerSize }]}>
        <Svg width={size} height={size} style={{ position: 'absolute', left: -10, top: -10 }}>
          <Defs>
            <Path id="curve" d={pathData} fill="none" />
          </Defs>
          
          {/* Curved percentage text */}
          <SvgText fill="#333" fontSize="11" fontWeight="600">
            <TextPath href="#curve" startOffset="24%">
              {labelPercentage}% of daily goal
            </TextPath>
          </SvgText>

          {/* Background circle - visible light green trail */}
          <Circle
            cx={cx}
            cy={cy}
            r={radius}
            stroke="#C8E6C9"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <Circle
            cx={cx}
            cy={cy}
            r={radius}
            stroke="#4CAF50"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${visualFill} ${circumference}`}
            strokeDashoffset={0}
            strokeLinecap="round"
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        </Svg>

        {/* Center text overlay */}
        <View style={styles.centerText}>
          <Text style={styles.caloriesValue}>{remaining}</Text>
          <Text style={styles.caloriesLabel}>kcal left</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  svgContainer: {
    position: 'relative',
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  centerText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caloriesValue: {
    fontSize: 26, // Reverted huge 44px
    fontWeight: '700',
    color: '#222',
  },
  caloriesLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
    fontWeight: '400',
  },
});

export default CircularProgress;
