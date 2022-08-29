import { atom } from "recoil";

export interface IItem {
  name: string;
  price: number;
}

export const itemState = atom<IItem[]>({
  key: "item",
  default: [
    {
      name: "아이템1",
      price: 25000,
    },
    {
      name: "아이템2",
      price: 25000,
    },
    {
      name: "아이템3",
      price: 25000,
    },
    {
      name: "아이템4",
      price: 25000,
    },
    {
      name: "아이템5",
      price: 25000,
    },
    {
      name: "아이템6",
      price: 25000,
    },
  ],
});
