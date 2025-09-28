import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { useAuth } from "@/hooks/AuthContext";

const Login = () => {
  const { signIn } = useAuth();
  const LOGO_SOURCE: ImageSourcePropType = require("../../assets/images/splashicon.png");
  const goToForgotPassword = () => {
    router.push("/(auth)/forgot-password");
  };
  const handleLogin = () => {
    signIn();
  };
  const goToSignup = () => {
    router.push("/(auth)/signup");
  };
  return (
    <View className="flex-1 bg-white p-6 pt-12">
      <Text className="text-2xl font-bold text-center mb-10 text-green-500">
        Log In
      </Text>
      <View className="items-center mb-8">
        <Image
          source={LOGO_SOURCE}
          className="w-36 h-36"
          resizeMode="contain"
        />
      </View>
      <Text className="text-base text-green-500 mb-1">Email</Text>
      <TextInput
        placeholder="consultme@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 p-4 rounded-xl mb-4 text-base text-gray-800"
      />

      <Text className="text-base text-green-500 mb-1">Password</Text>
      <TextInput
        placeholder="********"
        secureTextEntry
        className="border border-gray-300 p-4 rounded-xl mb-2 text-base text-gray-800"
      />
      <TouchableOpacity onPress={goToForgotPassword} className="self-end mb-8">
        <Text className="text-green-500 text-base">Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-green-600 p-4 rounded-xl items-center shadow-lg mb-4"
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-semibold">Log In</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center mt-2">
        <Text className="text-gray-500 text-base">
          Don't have an account ?{" "}
        </Text>
        <TouchableOpacity onPress={goToSignup}>
          <Text className="text-green-500 text-base font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
