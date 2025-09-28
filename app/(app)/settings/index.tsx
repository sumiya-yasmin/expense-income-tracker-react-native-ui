import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RelativePathString } from "expo-router";
import { useAuth } from "@/hooks/AuthContext";

const USER_NAME = "Himel Mahmud";
const USER_EMAIL = "abchimel@gmail.com";

const SETTINGS_ITEMS = [
  {
    id: "currency",
    name: "Currency",
    icon: "currency-usd",
    route: "/(app)/settings/currency",
  },
  {
    id: "expenseCategories",
    name: "Expenses Categories",
    icon: "folder-minus-outline",
    route: "/(app)/settings/expense-categories",
  },
  {
    id: "incomeCategories",
    name: "Income Categories",
    icon: "folder-plus-outline",
    route: "/(app)/settings/income-categories",
  },
  {
    id: "terms",
    name: "Terms & Policies",
    icon: "shield-check-outline",
    route: "/(app)/settings/terms-and-conditions",
  },
  {
    id: "review",
    name: "Review The App",
    icon: "thumb-up-outline",
    route: "/(app)/settings/review-the-app",
  },
  {
    id: "delete",
    name: "Delete Account",
    icon: "trash-can-outline",
    route: "/(app)/settings/delete-account",
  },
];

type SettingsItemProps = {
  item: (typeof SETTINGS_ITEMS)[0];
};

const SettingsListItem: React.FC<SettingsItemProps> = ({ item }) => {
  const handlePress = () => {
    router.push(item.route as RelativePathString);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center justify-between py-4 border-b border-gray-100"
    >
      <View className="flex-row items-center gap-4">
        <MaterialCommunityIcons
          name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap}
          size={24}
          className="mr-4"
        />
        <Text className="text-base font-medium">{item.name}</Text>
      </View>
      <View className="flex-row items-center">
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );
};

export default function Index() {
  const { signOut } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false, title: "Account" }} />

      <View className="px-5 pt-5 pb-3">
        <Text className="text-2xl font-bold text-gray-800">Account</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <TouchableOpacity
          className="flex-row items-center justify-between py-4 border-b border-gray-100"
          onPress={() => router.push("/(app)/settings/account-information")}
        >
          <View className="flex-row items-center">
            <Ionicons
              name="person-circle-outline"
              size={36}
              color="#49B58B"
              className="mr-3"
            />
            <View>
              <Text className="text-base font-medium text-gray-800">
                {USER_NAME}
              </Text>
              <Text className="text-sm text-gray-500">{USER_EMAIL}</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>

        <View className="mt-4">
          {SETTINGS_ITEMS.map((item) => (
            <SettingsListItem key={item.id} item={item} />
          ))}
        </View>

        <View className="mt-10 mb-20">
          <TouchableOpacity
            onPress={() => signOut()}
            className="bg-[#10B981] p-4 rounded-xl items-center shadow-md shadow-black/20"
          >
            <Text className="text-white text-lg font-bold">LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
