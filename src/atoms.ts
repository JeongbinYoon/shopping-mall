import { atom } from "recoil";

export interface IItem {
  imgURL: string;
  name: string;
  price: number;
  isBest?: boolean;
  isSameDay?: boolean;
}

export const itemState = atom<IItem[]>({
  key: "item",
  default: [
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202201/b1b9535b0796569874dcf25622051c62.jpg",
      name: "아이템1",
      price: 25000,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202208/833becd4207a1879527c9609f9e72672.jpg",
      name: "아이템2",
      price: 25000,
    },
    {
      imgURL:
        "https://www.maninstore.co.kr/web/product/medium/202208/202e9b5e1bac53101a80a2a9329c6432.jpg",
      name: "아이템3",
      price: 25000,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/abe2952eb0a6ec48ea5398d0eca56c4e.webp",
      name: "아이템4",
      price: 25000,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/16f6c0e6d1daaaa8b2b68d6de1812efc.jpg",
      name: "아이템5",
      price: 25000,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/257fc61e7e528b3e7cad0c853f9fb27e.webp",
      name: "아이템6",
      price: 25000,
    },
  ],
});

export const bestItemState = atom<IItem[]>({
  key: "bestItem",
  default: [
    {
      imgURL:
        "https://www.maninstore.co.kr/web/product/medium/202208/202e9b5e1bac53101a80a2a9329c6432.jpg",
      name: "베스트 아이템1",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202101/e71c044a135d60efd4c7d6392f6e3bea.jpg",
      name: "베스트 아이템2",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202102/19d61aa779e5e81b716427bfec9d7615.webp",
      name: "베스트 아이템3",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/abe2952eb0a6ec48ea5398d0eca56c4e.webp",
      name: "베스트 아이템4",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202208/efb4a570e9105f467741d72c95a0ba73.jpg",
      name: "베스트 아이템5",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/5ab379b00b1751b965eefa0b10afcf78.webp",
      name: "베스트 아이템6",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/16f6c0e6d1daaaa8b2b68d6de1812efc.jpg",
      name: "베스트 아이템7",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/cdd085868b3852150cecf805c70049b4.webp",
      name: "베스트 아이템8",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202203/2821e9dd5a749c183eb5a905c8e5631c.webp",
      name: "베스트 아이템9",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202201/b1b9535b0796569874dcf25622051c62.jpg",
      name: "베스트 아이템10",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202101/e71c044a135d60efd4c7d6392f6e3bea.jpg",
      name: "베스트 아이템11",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202208/51ed9e1bf5a03564c917bacd334cfab0.jpg",
      name: "베스트 아이템12",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/4703969b8e9d958c1e192638e00dcb46.webp",
      name: "베스트 아이템13",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202102/765bf6baa822241225f729583a0302d4.webp",
      name: "베스트 아이템14",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202103/5384047e9e686074d26bf0a9f4c2c863.jpg",
      name: "베스트 아이템15",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/b686ea69625b178f7dbf910e6993e16d.jpg",
      name: "베스트 아이템16",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202012/1f4e22281010cb744719b4265f525593.jpg",
      name: "베스트 아이템17",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202203/5e1fec99109cda767cf7e2590f530642.gif",
      name: "베스트 아이템18",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/257fc61e7e528b3e7cad0c853f9fb27e.webp",
      name: "베스트 아이템19",
      price: 25000,
      isBest: true,
      isSameDay: false,
    },
    {
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202111/832d0429af4688f7c54a2a529783178d.jpg",
      name: "베스트 아이템20",
      price: 25000,
      isBest: true,
      isSameDay: true,
    },
  ],
});
