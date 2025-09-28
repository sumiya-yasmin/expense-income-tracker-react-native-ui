import { CategoryItem } from "@/components/CategoryEditor";

export const MOCK_EXPENSES = [
  {
    id: "1",
    icon: "home-outline",
    name: "Home Rent",
    amount: 500,
    date: "02 June, 2025",
  },
  {
    id: "2",
    icon: "car-side",
    name: "Car Fuel",
    amount: 100,
    date: "05 June, 2025",
  },
  { id: "3", icon: "food", name: "Food", amount: 450, date: "05 June, 2025" },
  {
    id: "4",
    icon: "wrench",
    name: "Car Maintaining",
    amount: 250,
    date: "12 June, 2025",
  },
  { id: "5", icon: "gift", name: "Gift", amount: 100, date: "07 June, 2025" },
];

export const MOCK_INCOME = [
  {
    id: "5",
    icon: "cash",
    name: "Company Salary",
    amount: 1500,
    date: "01 June, 2025",
  },
  { id: "6", icon: "gift", name: "Gift", amount: 100, date: "07 June, 2025" },
];

export const EXPENSE_CATEGORY_ICONS: CategoryItem[] = [
  { id: "home", name: "Home", icon: "home-outline", amount: "$500" },
  { id: "travel", name: "Travel", icon: "airplane-takeoff", amount: "$500" },
  { id: "food", name: "Food", icon: "food-fork-drink", amount: "$500" },
  { id: "shop", name: "Shop", icon: "cart-outline", amount: "$500" },
  { id: "gift", name: "Gift", icon: "gift-outline", amount: "$500" },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "drama-masks",
    amount: "$500",
  },
  { id: "car", name: "Car", icon: "car-outline", amount: "$500" },
  { id: "beauty", name: "Beauty", icon: "spa-outline", amount: "$500" },
  {
    id: "education",
    name: "Education",
    icon: "school-outline",
    amount: "$500",
  },
  { id: "healthcare", name: "Healthcare", icon: "medical-bag", amount: "$500" },
];
export const INCOME_CATEGORY_ICONS: CategoryItem[] = [
  { id: "home", name: "Home", icon: "home-outline", amount: "$500" },
  {
    id: "salary",
    name: "Company Salary",
    icon: "cash-multiple",
    amount: "$500",
  },
  { id: "shop", name: "Shop", icon: "cart-outline", amount: "$500" },
  { id: "gift", name: "Gift", icon: "gift-outline", amount: "$500" },
  { id: "car", name: "Car", icon: "car-outline", amount: "$500" },
  { id: "other", name: "Other", icon: "dots-grid", amount: "$500" },
];

export const TERMS_CONTENT = [
  {
    number: "1.",
    title: "Use of the App",
    body: "By using Budget IQ, you confirm you are at least 18 years old and agree to these Terms.",
  },
  {
    number: "2.",
    title: "Accounts",
    body: "You may need to create an account. You’re responsible for keeping your login details secure.",
  },
  {
    number: "3.",
    title: "Features & Advice",
    body: "Our tools help you manage your finances, but we don’t offer financial, legal, or tax advice.",
  },
  {
    number: "4.",
    title: "Privacy",
    body: "We respect your privacy and handle your data per our Privacy Policy. We don’t share or sell your information without consent, unless required by law.",
  },
  {
    number: "5.",
    title: "Subscriptions",
    body: "Some features require a paid plan. Fees may change with notice. You can cancel anytime via account settings.",
  },
  {
    number: "6.",
    title: "Refunds",
    body: "We don’t offer refunds for partial billing periods unless legally required.",
  },
  {
    number: "7.",
    title: "Acceptable Use",
    body: "Don’t misuse the app, break laws, or provide false info.",
  },
  {
    number: "8.",
    title: "Ownership",
    body: "All content and software in Budget IQ belong to us or our partners.",
  },
  {
    number: "9.",
    title: "No Guarantees",
    body: "We provide the app “as-is.” We can’t guarantee it will always work perfectly.",
  },
  {
    number: "10.",
    title: "Liability",
    body: "We’re not liable for any damages resulting from your use of the app, as allowed by law.",
  },
  {
    number: "11.",
    title: "Changes",
    body: "We may update these Terms at any time. Continued use means you accept the changes.",
  },
  {
    number: "12.",
    title: "Governing Law",
    body: "These Terms are governed by the laws of [Your Jurisdiction].",
  },
  {
    number: "13.",
    title: "Contact",
    body: "Questions? Email us at 📧 support@budgetiq.com",
  },
];
