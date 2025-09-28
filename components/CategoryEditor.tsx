// components/CategoryEditor.tsx

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export type CategoryItem = {
  id: string;
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  amount?: string;
};

interface CategoryEditorProps {
  title: string;
  initialCategories: CategoryItem[];
}

const CategoryEditor: React.FC<CategoryEditorProps> = ({
  title,
  initialCategories,
}) => {
  const [activeCategoryIds, setActiveCategoryIds] = useState<string[]>(
    initialCategories.map((cat) => cat.id)
  );

  const toggleCategory = (id: string) => {
    setActiveCategoryIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((itemId) => itemId !== id)
        : [...prevIds, id]
    );
  };

  const handleSave = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center p-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#49B58B" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-800">{title}</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 120,
        }}
      >
        {initialCategories.map((category) => {
          const isSelected = activeCategoryIds.includes(category.id);

          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => toggleCategory(category.id)}
              className="flex-row items-center justify-between py-4 border-b border-gray-100"
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name={category.icon}
                  size={24}
                  color="#49B58B"
                  className="mr-3"
                />
                <Text className="text-base text-gray-800">{category.name}</Text>
              </View>

              <View
                className={`w-6 h-6 rounded border-2 justify-center items-center ${
                  isSelected
                    ? "bg-[#49B58B] border-[#49B58B]"
                    : "border-gray-400"
                }`}
              >
                {isSelected && (
                  <Ionicons name="checkmark-sharp" size={18} color="white" />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <TouchableOpacity
          onPress={handleSave}
          className="bg-[#49B58B] p-4 rounded-xl items-center shadow-md"
        >
          <Text className="text-white text-lg font-bold">SAVE CHANGE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CategoryEditor;
