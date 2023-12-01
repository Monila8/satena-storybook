import { Search } from "./Search";

export default {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
};

export const standard = {
  args: {
    peopleOptions: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
    ],
    categoryOptions: [
      { value: "economy", label: "eco" },
      { value: "vip", label: "vip" },
    ],
  },
};
