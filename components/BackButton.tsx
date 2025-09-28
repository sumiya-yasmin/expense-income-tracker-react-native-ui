import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} className="z-10 mb-2">
    <Ionicons name="chevron-back" size={32} color="#6B7280" />
  </TouchableOpacity>
);
export default BackButton;
