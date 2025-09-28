import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ScrollView,
} from "react-native";

const Signup = () => {
  const APPLE_ICON: ImageSourcePropType = require("../../assets/icons/apple.png");
  const GOOGLE_ICON: ImageSourcePropType = require("../../assets/icons/google.png");

  const handleSignup = () => {
    router.push("/(auth)/account-verification");
  };

  const goToLogin = () => {
    router.replace("/(auth)/login");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6 pt-12">
        <Text className="text-3xl font-bold text-center mb-8 text-green-500">
          Sign Up
        </Text>

        <Text className="text-base text-green-500 mb-1">Full Name</Text>
        <TextInput
          placeholder="Enter you full name here..."
          className="border border-gray-300 p-4 rounded-xl mb-4 text-base text-gray-800"
        />

        <Text className="text-base text-green-500 mb-1">Email</Text>
        <TextInput
          placeholder="consultme@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-gray-300 p-4 rounded-xl mb-4 text-base text-gray-800"
        />

        <Text className="text-base text-green-500 mb-1">Phone Number</Text>
        <TextInput
          placeholder="Enter you phone number"
          keyboardType="phone-pad"
          className="border border-gray-300 p-4 rounded-xl mb-4 text-base text-gray-800"
        />

        <Text className="text-base text-green-500 mb-1">Password</Text>
        <TextInput
          placeholder="********"
          secureTextEntry
          className="border border-gray-300 p-4 rounded-xl mb-4 text-base text-gray-800"
        />

        <Text className="text-base text-green-500 mb-1">Confirm Password</Text>
        <TextInput
          placeholder="********"
          secureTextEntry
          className="border border-gray-300 p-4 rounded-xl mb-8 text-base text-gray-800"
        />

        <TouchableOpacity
          onPress={handleSignup}
          className="bg-green-600 p-4 rounded-xl items-center shadow-lg mb-8"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold">Sign Up</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center items-center mb-6">
          <TouchableOpacity
            className="border border-gray-300 rounded-xl mx-2 w-20 h-16 items-center justify-center"
            activeOpacity={0.7}
          >
            <Image
              source={APPLE_ICON}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="border border-gray-300  rounded-xl mx-2 w-20 h-16 items-center justify-center"
            activeOpacity={0.7}
          >
            <Image
              source={GOOGLE_ICON}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Text className="text-gray-500 text-base">I have an account ? </Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text className="text-green-600 text-base font-semibold">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
