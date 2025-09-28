import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const ActivePill = ({
  iconName,
  label,
}: {
  iconName: string;
  label: string;
}) => (
  <View className="items-center">
    <View
      className="bg-[#10B981] rounded-3xl items-center justify-center"
      style={{ height: 60, width: 120, paddingHorizontal: 10 }}
    >
      <Ionicons
        name={iconName as any}
        size={24}
        color="white"
        style={{ marginRight: 6 }}
      />
      <Text
        className="text-white text-sm font-semibold"
        style={{ marginTop: 8 }}
      >
        {label}
      </Text>
    </View>
  </View>
);

export const InactiveIcon = ({
  name,
  color,
  size,
  label,
}: {
  name: string;
  color: string;
  size: number;
  label: string;
}) => (
  <View className="items-center">
    <Ionicons name={`${name}-outline` as any} size={size} color={color} />
    <Text
      style={{
        fontSize: 12,
        fontWeight: "600",
        color: color,
        marginTop: 2,
        textAlign: "center",
        width: 150,
        paddingHorizontal: 0,
      }}
      numberOfLines={1}
    >
      {label}
    </Text>
  </View>
);
