// app/(app)/settings/review-the-app.tsx

import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReviewAppScreen() {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  // Since this is a standalone page, the modal is always "visible"
  // as long as the page is mounted.
  const isModalVisible = true;

  const renderStars = () => {
    return Array.from({ length: totalStars }, (_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= rating;
      return (
        <TouchableOpacity key={index} onPress={() => setRating(starValue)}>
          <Ionicons
            name={isFilled ? "star" : "star-outline"}
            size={36}
            color={isFilled ? "#FFC107" : "#A0AEC0"}
            className="mx-1"
          />
        </TouchableOpacity>
      );
    });
  };

  const handleSubmit = () => {
    if (rating === 0) return;

    console.log(`Review submitted with ${rating} stars.`);
    // [Add API Submission logic here]

    // Navigate back to the previous screen (Account page)
    router.back();
  };

  const handleCancel = () => {
    // Close the modal by navigating back
    router.back();
  };

  return (
    // 1. We wrap everything in a SafeAreaView which serves as the base layer
    <SafeAreaView className="flex-1 bg-transparent">
      {/* 2. Configure the screen to hide the header and possibly use a modal presentation */}
      <Stack.Screen
        options={{
          headerShown: false,
          // Use presentation: 'modal' in your _layout.tsx file for this route
          // If you want the dark background to be part of the screen transition,
          // set the screen style here (though a standard RN Modal is often easier).
        }}
      />

      {/* 3. The Modal component handles the dark overlay and centering */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible} // Always true since this page is the modal
        onRequestClose={handleCancel}
      >
        <View style={styles.centeredView} className="bg-black/50">
          <View className="bg-white rounded-2xl p-6 w-11/12 max-w-sm shadow-xl items-center">
            {/* Title */}
            <Text className="text-xl font-bold text-gray-800 text-center mb-6">
              Please Review The App
            </Text>
            <Text className="text-sm text-gray-600 text-center mb-6">
              Insert your own think about the app
            </Text>

            {/* Stars */}
            <View className="flex-row mb-8">{renderStars()}</View>

            {/* Buttons */}
            <View className="flex-row justify-between w-full gap-3">
              <TouchableOpacity
                onPress={handleCancel}
                className="flex-1 border border-gray-300 py-3 rounded-lg items-center"
              >
                <Text className="text-base font-bold text-gray-700">
                  CANCEL
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={rating === 0}
                className={`flex-1 py-3 rounded-lg items-center ${
                  rating > 0 ? "bg-[#49B58B]" : "bg-gray-400"
                }`}
              >
                <Text className="text-base font-bold text-white">SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
