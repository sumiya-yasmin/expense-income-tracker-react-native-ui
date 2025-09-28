import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import OnboardingSlide from "@/components/OnboardlingSlide";
import { router } from "expo-router";

const LoginSignupSelect = () => {
  const IMAGE_SOURCE: ImageSourcePropType = require("../../assets/images/onboarding2.png");
  const handleNext = () => {
    router.push("/(auth)/login");
  };

  return (
    <OnboardingSlide
      imageSource={IMAGE_SOURCE}
      title="Best Budgeting Tools for Home Finances"
      description="Easily log in or sign up to connect with BUDGET IQ and calculate your daily cost."
      onNext={handleNext}
      buttonText="Next"
      slideIndex={1}
    />
  );
};

export default LoginSignupSelect;
