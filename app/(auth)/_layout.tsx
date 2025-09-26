import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="login-signup-select" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="account-verification" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="otp" />
      <Stack.Screen name="new-password" />
    </Stack>
  );
}
