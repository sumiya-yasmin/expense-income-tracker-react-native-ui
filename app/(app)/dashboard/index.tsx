import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { EXPENSE_CATEGORY_ICONS, INCOME_CATEGORY_ICONS, MOCK_EXPENSES, MOCK_INCOME } from '@/Data'

type Category = {
  name: string;
  icon:  string;
  amount: string;
};
type MOCK_DATA = {
  name: string;
  icon:  string;
  amount: number;
  date: string;
};
const screenWidth = Dimensions.get("window").width;
const itemSpacing = 16; 
const numColumns = 4;
const itemSize = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

const Index = () => {
  const [isActive, setIsActive] = useState<'EXPENSES' | 'INCOME'>('EXPENSES'); 

  const CATEGORY_ICONS = isActive === 'EXPENSES' 
    ? EXPENSE_CATEGORY_ICONS 
    : INCOME_CATEGORY_ICONS;

    const transactionData = isActive === 'EXPENSES' ? MOCK_EXPENSES : MOCK_INCOME;
  const listTitle = isActive === 'EXPENSES' ? 'Specific Cost' : 'Specific Earn';


  const renderCategoryItem = ({ item }: { item: Category }) => (
    <View style={{ width: itemSize, margin: itemSpacing / 2, alignItems: "center" }}>
      <View className="bg-gray-100 rounded-xl items-center justify-center p-3 w-full aspect-square shadow-sm">
        <MaterialCommunityIcons name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap} size={32} color="#49B58B" />
      </View>
        <Text className="text-[#49B58B] text-base font-semibold mt-1">{item.amount}</Text>
    </View>
  );

  const renderTransactionItem = ({ item}:{item:MOCK_DATA}) => (
    <TouchableOpacity 
      className="flex-row justify-between items-center py-4 border-b border-gray-100" 
      // onPress={handleItemPress}
    >
      <View className="flex-row items-center">
        <View className="bg-gray-100 p-2 rounded-lg mr-3">
            <MaterialCommunityIcons name={item.icon  as keyof typeof MaterialCommunityIcons.glyphMap} size={20} color="#3cb371" />
        </View>
        <View>
          <Text className="text-base font-medium text-gray-800">{item.name}</Text>
          <Text className="text-xs text-gray-500">{item.date}</Text>
        </View>
      </View>
      <Text 
        className={`text-base font-semibold `}
      >
        ${item.amount}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      
        <View className="flex-row justify-between items-center px-4 pt-4 pb-2">
          <View className="flex-row items-center">
            <Image source={require("../../../assets/icons/logo-icon.png")} />
            <Text className="text-lg font-bold text-[#10B981] ml-2">
              BUDGET IQ
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center border border-gray-300 px-3 py-1 rounded-full">
            <Text className="text-sm mr-1 text-gray-700">This Month</Text>
            <Ionicons name="chevron-down" size={16} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center py-4 px-12 gap-4">
          <TouchableOpacity 
            className={`w-1/2 py-3 rounded-lg ${isActive==='EXPENSES' ? "bg-[#49B58B]" : "bg-[#6C6B6E]"}`} 
            onPress={()=>setIsActive('EXPENSES')}
          >
            <Text className="text-white text-center font-bold">EXPENSES</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className={`w-1/2 py-3 rounded-lg ${isActive==='INCOME' ? "bg-[#49B58B]" : "bg-[#6C6B6E]"}`} 
            onPress={()=>setIsActive('INCOME')}
          >
            <Text className="text-white text-center font-bold">INCOME</Text>
          </TouchableOpacity>
        </View>

        <View className="px-1 pb-4 border-b border-gray-200">
          <FlatList
            data={CATEGORY_ICONS}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.name}
            numColumns={numColumns}
            scrollEnabled={false} 
            contentContainerStyle={{
              justifyContent: "center",
              padding: itemSpacing / 2,
            }}
          />
        </View>
        <Text className="text-xl font-bold px-5 mt-4 mb-2 text-gray-800">{listTitle}</Text>
        <FlatList
          data={transactionData}
          renderItem={renderTransactionItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          ItemSeparatorComponent={() => <View className="h-px bg-gray-100" />}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index
