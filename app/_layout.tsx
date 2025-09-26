import { AuthProvider, useAuth } from "@/hooks/AuthContext";
import "./globals.css";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
  const { isAuthenticated, isLoading } = useAuth();
  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);
  if (isLoading) {
    return <Stack screenOptions={{ headerShown: false }} />;
  }
  return (
    <Stack>
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
        redirect={isAuthenticated}
      />
       <Stack.Screen
        name="(app)"
        options={{ headerShown: false }}
        redirect={!isAuthenticated}
      />
      
    </Stack>
  );
}

export default function RootLayout(){
  return(
    <AuthProvider>
      <RootLayoutContent/>
    </AuthProvider>
  )
}