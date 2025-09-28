import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface KeypadProps {
  currentAmount: string;
  setCurrentAmount: React.Dispatch<React.SetStateAction<string>>;
}

const KEYPAD_BUTTONS = [
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "-"],
  [".", "0", "⌫", "+"],
];
const screenWidth = Dimensions.get("window").width;
const buttonSize = (screenWidth - 20) / 4; // 4 columns, subtract 20 for padding

const Keypad: React.FC<KeypadProps> = ({ currentAmount, setCurrentAmount }) => {
  const handleKeypadPress = (key: string) => {
    let newAmount = currentAmount;

    if (key === "⌫") {
      newAmount = newAmount.length > 1 ? newAmount.slice(0, -1) : "0";
    } else if (key === ".") {
      if (!newAmount.includes(".")) {
        newAmount += ".";
      }
    } else if (!isNaN(Number(key))) {
      if (newAmount === "0" && key !== "0") {
        newAmount = key;
      } else if (newAmount.length < 10) {
        newAmount += key;
      }
    }
    setCurrentAmount(newAmount);
  };

  const renderKeypadButton = (key: string) => (
    <TouchableOpacity
      key={key}
      onPress={() => handleKeypadPress(key)}
      className="bg-white rounded-lg items-center justify-center border border-gray-200"
      style={{ width: buttonSize, height: buttonSize }} // Square buttons
    >
      <Text className="text-xl font-semibold text-gray-700">
        {key === "⌫" ? (
          <Ionicons name="backspace-outline" size={18} color="#6C6B6E" />
        ) : (
          key
        )}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="p-1 bg-gray-50 border-t border-gray-200">
      {KEYPAD_BUTTONS.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between">
          {row.map((key) => renderKeypadButton(key))}
        </View>
      ))}
    </View>
  );
};

export default Keypad;
