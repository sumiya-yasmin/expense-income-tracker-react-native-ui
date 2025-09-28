import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface DeleteAccountModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

const DeleteAccount: React.FC<DeleteAccountModalProps> = ({
  isVisible,
  onClose,
  onConfirmDelete,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView} className="bg-black/50">
        <View className="bg-white rounded-2xl p-6 w-11/12 max-w-sm shadow-xl items-center">
          <View className="bg-red-100 p-4 rounded-full mb-4">
            <Ionicons name="trash-bin-outline" size={32} color="#EF4444" />
          </View>

          <Text className="text-lg font-semibold text-gray-800 text-center mb-4">
            Are you sure you want to delete your Budget IQ account?
          </Text>
          <Text className="text-sm text-gray-600 text-center mb-8 leading-relaxed">
            This will permanently remove all your data and cannot be undone.
            Please confirm to proceed.
          </Text>

          <View className="flex-row justify-between w-full gap-3">
            <TouchableOpacity
              onPress={onClose}
              className="flex-1 border border-gray-300 py-3 rounded-lg items-center"
            >
              <Text
                className="text-base font-bold text-gray-700"
                onPress={() => router.back()}
              >
                CANCEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirmDelete}
              className="flex-1 bg-[#49B58B] py-3 rounded-lg items-center"
            >
              <Text className="text-base font-bold text-white">DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteAccount;
