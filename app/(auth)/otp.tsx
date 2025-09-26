import VerificationOTPScreen from "@/components/VerificationOTPScreen";
import { router } from "expo-router";

const OtpConfirm = () => {
  const handleOtpConfirmation = (otpCode: string) => {
    router.push("/(auth)/new-password");
  };

  return (
    <VerificationOTPScreen
      title="OTP"
      description="To reset you account, please enter the verification code you get on your e-mail."
      onConfirm={handleOtpConfirmation}
      backRoute="/(auth)/forgot-password"
      showBackButton={true}
    />
  );
};

export default OtpConfirm;
