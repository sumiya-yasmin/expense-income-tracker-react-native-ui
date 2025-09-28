import { ActivePill, InactiveIcon } from "@/components/TabBarIcon";
import { Tabs, usePathname } from "expo-router";
import { useMemo } from "react";

export default function AppLayout() {
  const pathname = usePathname();

  const TABS_HIDDEN_ROUTES = useMemo(
    () => [
      "/settings/currency",
      "/settings/expense-categories",
      "/settings/income-categories",
      "/settings/terms-and-conditions",
      "/settings/review-the-app",
      "/settings/delete-account",
      "/settings/account-information",
      "/dashboard/add-transaction",
    ],
    []
  );

  const isTabBarHidden = TABS_HIDDEN_ROUTES.some((route) =>
    pathname.includes(route)
  );
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
          marginBottom: 0,
          // marginTop: 10,
          alignItems: "center",
          justifyContent: "space-around",
        },
        tabBarInactiveTintColor: "#6B7280",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <ActivePill iconName="home-outline" label="Home" />;
            }
            return (
              <InactiveIcon
                name="home"
                color={color}
                label="Home"
                size={size}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <ActivePill iconName="grid-outline" label="Dashboard" />;
            }
            return (
              <InactiveIcon
                name="grid"
                label="Dashboard"
                color={color}
                size={size}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#E5E7EB",
            display: isTabBarHidden ? "none" : "flex",
            height: isTabBarHidden ? 0 : 90,
            // paddingBottom: isTabBarHidden ? 0 : 30,
            paddingTop: isTabBarHidden ? 0 : 10,
            // marginTop: isTabBarHidden ? 0 : 10,
            alignItems: "center",
            justifyContent: "space-around",
          },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <ActivePill iconName="settings-outline" label="Settings" />
              );
            }
            return (
              <InactiveIcon
                name="settings"
                label="Settings"
                color={color}
                size={size}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#E5E7EB",
            display: isTabBarHidden ? "none" : "flex",
            height: isTabBarHidden ? 0 : 90,
            // paddingBottom: isTabBarHidden ? 0 : 30,
            paddingTop: isTabBarHidden ? 0 : 10,
            justifyContent: "space-around",
            alignItems: "center",
            // marginTop: isTabBarHidden ? 0 : 10,
          },
        }}
      />
    </Tabs>
  );
}
