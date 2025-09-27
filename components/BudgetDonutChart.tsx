import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PieChart } from "react-native-chart-kit";

const PIE_CHART_DATA = [
  {
    name: "Home",
    population: 500,
    color: "#EF4444",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Savings",
    population: 500,
    color: "#10B981",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
  {
    name: "Car",
    population: 500,
    color: "#8B5CF6",
    legendFontColor: "#7F7F7F",
    legendFontSize: 12,
  },
];

const TOTAL_SPENT = PIE_CHART_DATA.reduce(
  (sum, item) => sum + item.population,
  0
);

const CHART_SIZE = 280;
const INNER_HOLE_RADIUS = CHART_SIZE * 0.27;

const chartConfig = {
  backgroundColor: "#ffffff",
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
};

export const BudgetDonutChart = () => {
  return (
    <View className="items-center mb-8">
      <View
        className="justify-center items-center relative"
        style={{ height: CHART_SIZE, width: CHART_SIZE }}
      >
        <PieChart
          data={PIE_CHART_DATA}
          width={CHART_SIZE + 30}
          height={CHART_SIZE}
          chartConfig={chartConfig}
          accessor="population"
          paddingLeft="78"
          hasLegend={false}
          backgroundColor={"#ffffff"}
        />

        <View
          className="absolute justify-center items-center bg-white rounded-full border border-gray-100"
          style={{
            height: INNER_HOLE_RADIUS * 2,
            width: INNER_HOLE_RADIUS * 2,
          }}
        >
          <Text className="text-gray-500 text-sm">Total Spent</Text>
          <Text className="text-gray-900 text-3xl font-bold mt-1">
            ${TOTAL_SPENT}
          </Text>
          <View className="w-10 h-[1px] bg-gray-300 my-1" />
          <Text className="text-green-500 text-lg font-semibold mt-1">
            +$2000 ↑
          </Text>
        </View>

        <View className="absolute top-[32%] right-[13%] p-2 bg-transparent rounded-full">
          <Ionicons name="home-sharp" size={20} color="white" />
        </View>

        <View className="absolute bottom-[11%] right-[48%] p-2 bg-transparent rounded-full">
          <Ionicons name="briefcase-sharp" size={20} color="white" />
        </View>

        <View className="absolute bottom-[56%] left-[12%] p-2 bg-transparent rounded-full">
          <Ionicons name="car-sharp" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};
