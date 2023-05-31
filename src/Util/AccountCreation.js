export default function AccountCreation() {
  const categories = [
    { value: "Housing", label: "Housing", color: "red" },
    { value: "Food", label: "Food", color: "blue" },
    { value: "Entertainment", label: "Entertainment", color: "green" },
  ];
  const total = 0;
  const expenses = { Housing: [], Entertainment: [], Food: [] };

  return { categories, total, expenses };
}
