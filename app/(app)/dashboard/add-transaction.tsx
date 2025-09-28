import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MOCK_EXPENSES, MOCK_INCOME } from "@/Data";
import { router } from "expo-router";
import Keypad from "@/components/KeyPadButtons";
import { SafeAreaView } from "react-native-safe-area-context";

type Transaction = {
  id: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  name: string;
  amount: number;
  date: string;
};

const AddTransaction = () => {
  const params = useLocalSearchParams();

  const transactionId = params.transactionId as string;
  const transactionType = params.transactionType as "EXPENSES" | "INCOME";

  const [itemDetails, setItemDetails] = useState<Transaction | null>(null);
  const [currentAmount, setCurrentAmount] = useState("0");
  const isExpense = transactionType === "EXPENSES";
  const sign = isExpense ? "-" : "+";

  useEffect(() => {
    if (!transactionId || !transactionType) return;

    const list = transactionType === "EXPENSES" ? MOCK_EXPENSES : MOCK_INCOME;
    const foundItem = list.find((item) => item.id === transactionId);

    if (foundItem) {
      setItemDetails(foundItem as Transaction);
      setCurrentAmount(foundItem.amount.toString());
    }
  }, [transactionId, transactionType]);

  if (!itemDetails) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-500">No transaction found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="p-6">
          <TouchableOpacity
            className="bg-[#10B981]  p-4 flex-row  rounded-xl justify-between items-center shadow-lg mb-4"
            activeOpacity={1}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-6 h-6 justify-center items-center"
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View className="gap-4 justify-center items-center flex-row">
              <View className="bg-white rounded-lg p-1">
                <MaterialCommunityIcons
                  name={itemDetails.icon}
                  size={26}
                  color="#49B58B"
                />
              </View>
              <Text className="text-white text-xl font-semibold mt-2">
                {itemDetails.name}
              </Text>
            </View>
            <View className="w-6 h-6" />
          </TouchableOpacity>
          <View className="flex-1 p-5">
            <View className="flex-row justify-between items-center py-4 border-b border-gray-100">
              <View className="flex-row items-center gap-4">
                <Ionicons name="wallet-outline" size={24} color="#6C6B6E" />
                <Text className="text-lg text-gray-700 ml-3">Amount</Text>
              </View>
              <Text className={`text-3xl font-bold`}>
                {sign}
                {currentAmount}
              </Text>
            </View>

            <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-100">
              <View className="flex-row items-center gap-4">
                <Ionicons name="calendar-outline" size={24} color="#6C6B6E" />
                <Text className="text-lg text-gray-700 ml-3">Date</Text>
              </View>
              <Text className="text-lg text-gray-700">
                {itemDetails?.date || "Today"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            className="bg-[#10B981] p-4 mx-2 m-6 rounded-lg"
          >
            <Text className="text-white text-center text-lg font-bold">
              ADD TRANSACTION
            </Text>
          </TouchableOpacity>

          <Keypad
            currentAmount={currentAmount}
            setCurrentAmount={setCurrentAmount}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTransaction;
