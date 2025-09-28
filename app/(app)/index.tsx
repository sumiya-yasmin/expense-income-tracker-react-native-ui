import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { BudgetDonutChart } from "@/components/BudgetDonutChart"; // Assuming you put the component here

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row justify-between items-center px-4 pt-4 pb-2">
          <View className="flex-row items-center">
            <Image source={require("../../assets/icons/logo-icon.png")} />
            <Text className="text-lg font-bold text-[#10B981] ml-2">
              BUDGET IQ
            </Text>
          </View>

          <TouchableOpacity className="w-9 h-9 rounded-full bg-gray-200 justify-center items-center border border-green-500">
            <Ionicons name="person" size={20} color="#6B7280" />
            <View className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-white" />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center">
          <View className="bg-[#B8E2D2] p-3 m-8 rounded-lg w-fit">
            <Text className="text-gray-700 text-base text-center">
              "Skipping one coffee = $5 closer to your goal"
            </Text>
          </View>
        </View>
        <View className="flex-1 justify-center items-center px-4">
          <BudgetDonutChart />
        </View>
      </View>
    </SafeAreaView>
  );
}
