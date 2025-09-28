import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TERMS_CONTENT } from "@/Data";

const TermsAndConditions = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center p-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#49B58B" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-800">
          Terms & Conditions
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          paddingBottom: 50,
        }}
      >
        <Text className="text-base text-gray-700 mb-6 leading-relaxed">
          Welcome to Budget IQ, your personal finance tool for budgeting,
          saving, and tracking goals. By using Budget IQ, you agree to the terms
          below and our Privacy Policy.
        </Text>

        {TERMS_CONTENT.map((item) => (
          <View key={item.number} className="mb-4">
            <Text className="text-base font-bold text-gray-800 mb-1">
              {item.number} {item.title}
            </Text>
            <Text className="text-sm text-gray-600 leading-relaxed">
              {item.body}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions;
