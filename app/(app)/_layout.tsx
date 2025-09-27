import { ActivePill, InactiveIcon } from "@/components/TabBarIcon";
import { Tabs } from "expo-router";

export default function AppLayout() {
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
        },
        tabBarInactiveTintColor: "#6B7280",
        tabBarShowLabel: false
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
                return <InactiveIcon name="home" color={color} label="Home" size={size} />;
              },
        }}
      />
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
                    return <ActivePill iconName="grid-outline" label="Dashboard" />;
                }
                return <InactiveIcon name="grid" label="Dashboard" color={color} size={size} />;
              },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
                    return <ActivePill iconName="settings-outline" label="Settings" />;
                }
                return <InactiveIcon name="settings" label="Settings" color={color} size={size} />;
              },
        }}
      />
    </Tabs>
  );
}
