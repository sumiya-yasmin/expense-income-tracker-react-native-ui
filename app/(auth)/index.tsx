import { Link, router } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/onboarding");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={require("../../assets/images/splashicon.png")}
        className="w-52 h-52"
        resizeMode="contain"
      />
    </View>
  );
}
