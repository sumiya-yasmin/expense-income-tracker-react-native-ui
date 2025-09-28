import React from "react";

import { Stack } from "expo-router";
import { EXPENSE_CATEGORY_ICONS } from "@/Data";
import CategoryEditor from "@/components/CategoryEditor";

export default function ExpenseCategories() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CategoryEditor
        title="Expenses Categories"
        initialCategories={EXPENSE_CATEGORY_ICONS}
      />
    </>
  );
}
