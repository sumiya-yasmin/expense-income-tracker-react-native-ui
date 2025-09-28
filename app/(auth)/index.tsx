import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

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
        source={require("../../assets/images/android-icon-splash.png")}
        className="w-64 h-64"
        resizeMode="contain"
      />
    </View>
  );
}
