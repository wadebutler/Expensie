export default function AccountCreation() {
  const categories = [
    { value: "home", label: "Housing", color: "red" },
    { value: "food", label: "Food", color: "blue" },
    { value: "entertainment", label: "Entertainment", color: "green" },
  ];
  const total = 0;
  const expenses = [{ home: [] }, { food: [] }, { entertainment: [] }];

  return { categories, total, expenses };
}
