// app/(app)/settings/_layout.tsx

import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#000000",
        headerBackTitle: "",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Account",
        }}
      />

      <Stack.Screen name="currency" options={{ title: "Currency" }} />

      <Stack.Screen
        name="expense-categories"
        options={{ title: "Expenses Categories" }}
      />

      <Stack.Screen
        name="income-categories"
        options={{ title: "Income Categories" }}
      />

      <Stack.Screen
        name="terms-and-conditions"
        options={{ title: "Terms & Policies" }}
      />

      <Stack.Screen name="review-the-app" options={{ title: "Review App" }} />

      <Stack.Screen
        name="delete-account"
        options={{ title: "Delete Account" }}
      />

      <Stack.Screen
        name="account-information"
        options={{ title: "Account Information" }}
      />
    </Stack>
  );
}
