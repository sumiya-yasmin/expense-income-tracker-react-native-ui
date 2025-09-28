import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import OnboardingSlide from "@/components/OnboardlingSlide";
import { router } from "expo-router";

const Onboarding = () => {
  const IMAGE_SOURCE: ImageSourcePropType = require("../../assets/images/onboarding1.png");
  const handleNext = () => {
    router.push("/(auth)/login-signup-select");
  };

  return (
    <OnboardingSlide
      imageSource={IMAGE_SOURCE}
      title="Your Trusted Financial Advisor — Always Within Reach"
      description="Connect instantly with savings experts — right from your phone."
      onNext={handleNext}
      buttonText="Next"
      slideIndex={0}
    />
  );
};

export default Onboarding;
