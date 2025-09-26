import React from "react";
import VerificationOTPScreen from "@/components/VerificationOTPScreen";
import { router } from "expo-router";

const AccountVerification = () => {
  const handleVerification = (otpCode: string) => {
    router.replace("/(auth)/login");
  };
  return (
    <VerificationOTPScreen
      title="Account Verification"
      description="To verify you account, please enter the verification code that you have received in your email co***ty@gmail.com"
      onConfirm={handleVerification}
      showBackButton={false}
    />
  );
};

export default AccountVerification;
