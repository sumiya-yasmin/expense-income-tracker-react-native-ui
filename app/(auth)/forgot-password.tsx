import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import BackButton from "@/components/BackButton";

const ForgotPassword = () => {
  const handleForgotPassword = () => {
    router.push("/(auth)/otp");
  };
  const goBack = () => {
    router.push("/(auth)/login");
  };
  return (
    <View className="flex-1 bg-white p-6 pt-12">
      <BackButton onPress={goBack} />
      <Text className="text-3xl font-bold text-gray-800 text-start mb-4 mt-8">
        Forgot Password
      </Text>
      <Text className="text-base text-gray-600 text-start mb-10 ">
        To reset your password, Please enter the email address that is
        associated with the account. You'll get the link in your e-mail.
      </Text>
      <Text className="text-base text-green-500 mb-1">Email</Text>
      <TextInput
        placeholder="consultme@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 p-4 rounded-xl mb-4 text-base text-gray-800"
      />
      <TouchableOpacity
        onPress={handleForgotPassword}
        className="bg-green-600 p-4 rounded-xl items-center shadow-lg mb-4"
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-semibold">Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
