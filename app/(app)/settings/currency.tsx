import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const CURRENCIES = [
  { id: "USD", country: "United States of America", code: "USD", flag: "US" },
  { id: "AUD", country: "Australia", code: "AUD", flag: "AU" },
  { id: "GBP", country: "England", code: "GBP", flag: "GB" },
  { id: "NZD", country: "New Zealand", code: "NZD", flag: "NZ" },
  { id: "BDT", country: "Bangladesh", code: "BDT", flag: "BD" },
  { id: "SAR", country: "Saudi Arabia", code: "SAR", flag: "SA" },
];

type CurrencyItemProps = {
  currency: (typeof CURRENCIES)[0];
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const CurrencyListItem: React.FC<CurrencyItemProps> = ({
  currency,
  isSelected,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(currency.id)}
      className="flex-row items-center justify-between py-4 border-b border-gray-100"
    >
      <View className="flex-row items-center">
        <View className="w-8 h-8 mr-3 rounded-full border border-gray-200 justify-center items-center">
          <Text className="text-lg">{currency.flag}</Text>
        </View>
        <Text className="text-base text-gray-800">{currency.country}</Text>
      </View>
      <View className="flex-row items-center">
        <Text className="text-base font-semibold text-gray-700 mr-4">
          {currency.code}
        </Text>
        {isSelected && (
          <Ionicons name="checkmark-circle" size={24} color="#49B58B" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function Currency() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleSelectCurrency = (id: string) => {
    setSelectedCurrency(id);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center p-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#49B58B" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-800">Currency</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
      >
        {CURRENCIES.map((currency) => (
          <CurrencyListItem
            key={currency.id}
            currency={currency}
            isSelected={currency.id === selectedCurrency}
            onSelect={handleSelectCurrency}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
