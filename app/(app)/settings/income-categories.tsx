import React from "react";

import { Stack } from "expo-router";
import { INCOME_CATEGORY_ICONS } from "@/Data";
import CategoryEditor from "@/components/CategoryEditor";

export default function IncomeCategories() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CategoryEditor
        title="Income Categories"
        initialCategories={INCOME_CATEGORY_ICONS}
      />
    </>
  );
}
