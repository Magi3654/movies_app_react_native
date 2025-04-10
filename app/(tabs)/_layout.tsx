import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function _Layout() {
  interface TabBarIconInterface {
    title: string;
    iconName: any;
    focused: boolean;
  }

  const TabBarIcon = ({ title, iconName, focused }: TabBarIconInterface) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: focused ? "#A40000" : "transparent", // Tailwind color: secondary
          borderRadius: 15,
          paddingVertical: 8,
          paddingHorizontal: 12,
          width: 80, 
          height: 60, 
        }}
      >
        <Ionicons
          name={iconName}
          size={24} 
          color={focused ? "#D6C6FF" : "#A8B5DB"} // Tailwind colors: light-100 and light-200
          style={{
            marginTop: 4, 
          }}
        />
        <Text
          style={{
            marginTop: 4,
            fontSize: 12,
            color: focused ? "#D6C6FF" : "#A8B5DB", // Tailwind colors
            textAlign: "center", 
          }}
        >
          {title}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23", // Tailwind color: dark-200
          borderRadius: 20,
          marginHorizontal: 16,
          marginBottom: 20,
          marginTop: 20,
          height: 70, // Adjusted height for better spacing
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Home"
              iconName="home-outline"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Search"
              iconName="search-outline"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Saved"
              iconName="bookmark-outline"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Profile"
              iconName="person-outline"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});