import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const INITIAL_ACCOUNT = {
  firstName: "Himel",
  lastName: "Mahmud",
  email: "abchimel@gmail.com",
};

export default function AccountInformation() {
  const [account, setAccount] = useState(INITIAL_ACCOUNT);

  const handleSave = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center p-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} text-gray-800 />
        </TouchableOpacity>
        <Text className="text-xl text-center font-semibold text-gray-800">
          Account Information
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 30,
          paddingBottom: 100,
        }}
      >
        <View className="items-center mb-10">
          <View className="w-24 h-24 border-2 border-[#49B58B] rounded-full justify-center items-center bg-white shadow-sm">
            <Ionicons name="person-outline" size={60} />
          </View>
        </View>

        <View className="flex-row mb-6 justify-between">
          <View className="w-[48%]">
            <TextInput
              placeholder="First Name"
              value={account.firstName}
              onChangeText={(text) =>
                setAccount({ ...account, firstName: text })
              }
              className="border-b border-gray-300 pb-2 text-base text-gray-800"
            />
          </View>

          <View className="w-[48%]">
            <TextInput
              placeholder="Last Name"
              value={account.lastName}
              onChangeText={(text) =>
                setAccount({ ...account, lastName: text })
              }
              className="border-b border-gray-300 pb-2 text-base text-gray-800"
            />
          </View>
        </View>

        <View className="mb-10">
          <TextInput
            placeholder="E-mail"
            value={account.email}
            onChangeText={(text) => setAccount({ ...account, email: text })}
            keyboardType="email-address"
            className="border-b border-gray-300 pb-2 text-base text-gray-800"
          />
        </View>
      </ScrollView>

      <View className="p-4 border-t border-gray-100">
        <TouchableOpacity
          onPress={handleSave}
          className="bg-[#10B981] p-4 rounded-xl items-center shadow-md"
        >
          <Text className="text-white text-lg font-bold">SAVE CHANGE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
