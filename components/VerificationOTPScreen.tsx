import { Text, TouchableOpacity, View } from "react-native";
import OtpInputs from "./OtpInputs";
import { useState } from "react";
import { router } from "expo-router";
import BackButton from "./BackButton";

interface VerificationOTPProps {
  title: string;
  description: string;
  onConfirm: (otpCode: string) => void;
  backRoute?: string;
  showBackButton?: boolean;
}



const VerificationOTPScreen = ({
  title,
  description,
  onConfirm,
  backRoute,
  showBackButton,
}: VerificationOTPProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleConfirm = () => {
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      return;
    }
    onConfirm(fullOtp);
  };

  const goBack = () => {
    router.replace(backRoute as any);
  };

  return (
    <View className="flex-1 bg-white p-6 pt-12">
      {showBackButton !== false && <BackButton onPress={goBack} />}

      <Text className="text-3xl font-bold text-gray-800 text-start mb-4 mt-8">
        {title}
      </Text>
      <Text className="text-base text-gray-600 text-start mb-10 ">
        {description}
      </Text>

      <OtpInputs otp={otp} setOtp={setOtp} />

      <TouchableOpacity
        onPress={handleConfirm}
        className="bg-green-600 p-4 rounded-xl items-center shadow-lg mb-4"
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-semibold">Send</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-gray-500 text-base">Didn't get a code? </Text>
        <TouchableOpacity
          onPress={() => console.log("Resend Code clicked for: " + title)}
        >
          <Text className="text-green-600 text-base font-semibold">
            Send Again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default VerificationOTPScreen;
