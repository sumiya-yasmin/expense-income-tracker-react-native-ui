import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const ActivePill = ({ iconName, label }: { iconName: string, label: string }) => (
   
    <View 
        className="bg-[#10B981] rounded-full flex items-center justify-center p-6"
        
        style={{ paddingHorizontal: 16, height: 36, marginTop: -6 }} 
    >
        <Ionicons 
            name={iconName as any} 
            size={20} 
            color="white" 
            style={{ marginRight: 6 }} 
        />
        <Text className="text-white text-sm font-semibold">
            {label}
        </Text>
    </View>
);


export const InactiveIcon = ({ name, color, size, label }: { name: string, color: string, size: number, label:string }) => (
    <View className="items-center">
       
        <Ionicons name={`${name}-outline` as any} size={size} color={color} />
        <Text style={{ fontSize: 12, fontWeight: '600', color: color, marginTop: 4 }}>
            {label}
        </Text>
    </View>
);