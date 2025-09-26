import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <Text className="text-green-700 text-5xl">BudgetIQ</Text>
      <Link href="/onboarding">Onboarding</Link>
    </View>
  );
}
