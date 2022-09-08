import { atom } from "recoil";

export interface IItem {
  product_id: number;
  imgURL: string;
  name: string;
  price: number;
  discountRate?: number;
  color: string[];
  size: string[];
  category: string[];
  summary: string;
  stock_quantity?: number;
  create_date: number;
  update_date?: number;
}

export const newItemState = atom<IItem[]>({
  key: "newItem",
  default: [
    {
      product_id: 1,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202201/b1b9535b0796569874dcf25622051c62.jpg",
      name: "탄탄 조거팬츠 (4Color)",
      price: 29900,
      discountRate: 30,
      color: ["블랙", "그레이", "오트밀", "화이트멜란지"],
      size: ["S", "M", "L", "XL", "2XL"],
      category: ["DISCOUNT"],
      summary: `
      기본중에 기본! 맨인스토어 자체제작! 감탄 레이어드 분또 티셔츠!
      2만장이상의 판매량과 수많은 후기가 입증합니다!

      check point!
      1. 브랜드에서만 사용되는 고급 기능성 분또 원단으로 탄탄하게 착용 가능!
      2. 오랜기간 입어도 줄거나 늘어남이 없는 기능성 티!
      3. 여러번의 샘플링을 통한 핏, 늘어남 없는 라운드부분에 특별히 신경써서 제작!
      4. 단품은 물론 레이어드용으로 적당한 기장감과 트랜디한 앞뒤편차의 트임!
      5. 탄탄한 원단으로 비침이 없으며 건조기에 세탁해도 줄지않는 복원력!
      6. 브랜드 전문 공장에서 제작되어 탄탄한 봉제와 가성비 대비 높은 퀄리티!
      -
      Color - 블랙. 화이트
      -
      Size - M. L, XL
      -
      180/64 L 착용
      -
      M - 어깨 50 가슴 58.5 팔기장 62 총장 앞 67.5 / 뒤 70
      L - 어깨 53 가슴 59 팔기장 63 총장 앞 68.5 / 뒤 71
      XL - 어깨 54 가슴 62 팔기장 64 총장 앞 74 뒤 77
      -
      Fabric - 폴리 70% 레이온 26% 스판 4%
      `,
      stock_quantity: 25,
      create_date: 1661920032550,
    },
    {
      product_id: 2,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202208/833becd4207a1879527c9609f9e72672.jpg",
      name: "아이템2",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: [""],
      summary: `
      기본중에 기본! 맨인스토어 자체제작! 감탄 레이어드 분또 티셔츠!
      2만장이상의 판매량과 수많은 후기가 입증합니다!

      check point!
      1. 브랜드에서만 사용되는 고급 기능성 분또 원단으로 탄탄하게 착용 가능!
      2. 오랜기간 입어도 줄거나 늘어남이 없는 기능성 티!
      3. 여러번의 샘플링을 통한 핏, 늘어남 없는 라운드부분에 특별히 신경써서 제작!
      4. 단품은 물론 레이어드용으로 적당한 기장감과 트랜디한 앞뒤편차의 트임!
      5. 탄탄한 원단으로 비침이 없으며 건조기에 세탁해도 줄지않는 복원력!
      6. 브랜드 전문 공장에서 제작되어 탄탄한 봉제와 가성비 대비 높은 퀄리티!
      -
      Color - 블랙. 화이트
      -
      Size - M. L, XL
      -
      180/64 L 착용
      -
      M - 어깨 50 가슴 58.5 팔기장 62 총장 앞 67.5 / 뒤 70
      L - 어깨 53 가슴 59 팔기장 63 총장 앞 68.5 / 뒤 71
      XL - 어깨 54 가슴 62 팔기장 64 총장 앞 74 뒤 77
      -
      Fabric - 폴리 70% 레이온 26% 스판 4%
      `,
      create_date: 1661920032550,
    },
    {
      product_id: 3,
      imgURL:
        "https://www.maninstore.co.kr/web/product/medium/202208/202e9b5e1bac53101a80a2a9329c6432.jpg",
      name: "아이템3",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: [""],
      summary: `
      기본중에 기본! 맨인스토어 자체제작! 감탄 레이어드 분또 티셔츠!
      2만장이상의 판매량과 수많은 후기가 입증합니다!

      check point!
      1. 브랜드에서만 사용되는 고급 기능성 분또 원단으로 탄탄하게 착용 가능!
      2. 오랜기간 입어도 줄거나 늘어남이 없는 기능성 티!
      3. 여러번의 샘플링을 통한 핏, 늘어남 없는 라운드부분에 특별히 신경써서 제작!
      4. 단품은 물론 레이어드용으로 적당한 기장감과 트랜디한 앞뒤편차의 트임!
      5. 탄탄한 원단으로 비침이 없으며 건조기에 세탁해도 줄지않는 복원력!
      6. 브랜드 전문 공장에서 제작되어 탄탄한 봉제와 가성비 대비 높은 퀄리티!
      -
      Color - 블랙. 화이트
      -
      Size - M. L, XL
      -
      180/64 L 착용
      -
      M - 어깨 50 가슴 58.5 팔기장 62 총장 앞 67.5 / 뒤 70
      L - 어깨 53 가슴 59 팔기장 63 총장 앞 68.5 / 뒤 71
      XL - 어깨 54 가슴 62 팔기장 64 총장 앞 74 뒤 77
      -
      Fabric - 폴리 70% 레이온 26% 스판 4%
      `,
      create_date: 1661920032550,
    },
    {
      product_id: 4,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/abe2952eb0a6ec48ea5398d0eca56c4e.webp",
      name: "아이템4",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: [""],
      summary: `
      기본중에 기본! 맨인스토어 자체제작! 감탄 레이어드 분또 티셔츠!
      2만장이상의 판매량과 수많은 후기가 입증합니다!

      check point!
      1. 브랜드에서만 사용되는 고급 기능성 분또 원단으로 탄탄하게 착용 가능!
      2. 오랜기간 입어도 줄거나 늘어남이 없는 기능성 티!
      3. 여러번의 샘플링을 통한 핏, 늘어남 없는 라운드부분에 특별히 신경써서 제작!
      4. 단품은 물론 레이어드용으로 적당한 기장감과 트랜디한 앞뒤편차의 트임!
      5. 탄탄한 원단으로 비침이 없으며 건조기에 세탁해도 줄지않는 복원력!
      6. 브랜드 전문 공장에서 제작되어 탄탄한 봉제와 가성비 대비 높은 퀄리티!
      -
      Color - 블랙. 화이트
      -
      Size - M. L, XL
      -
      180/64 L 착용
      -
      M - 어깨 50 가슴 58.5 팔기장 62 총장 앞 67.5 / 뒤 70
      L - 어깨 53 가슴 59 팔기장 63 총장 앞 68.5 / 뒤 71
      XL - 어깨 54 가슴 62 팔기장 64 총장 앞 74 뒤 77
      -
      Fabric - 폴리 70% 레이온 26% 스판 4%
      `,
      create_date: 1661920032550,
    },
    {
      product_id: 5,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/16f6c0e6d1daaaa8b2b68d6de1812efc.jpg",
      name: "아이템5",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: [""],
      summary: `
      기본중에 기본! 맨인스토어 자체제작! 감탄 레이어드 분또 티셔츠!
      2만장이상의 판매량과 수많은 후기가 입증합니다!

      check point!
      1. 브랜드에서만 사용되는 고급 기능성 분또 원단으로 탄탄하게 착용 가능!
      2. 오랜기간 입어도 줄거나 늘어남이 없는 기능성 티!
      3. 여러번의 샘플링을 통한 핏, 늘어남 없는 라운드부분에 특별히 신경써서 제작!
      4. 단품은 물론 레이어드용으로 적당한 기장감과 트랜디한 앞뒤편차의 트임!
      5. 탄탄한 원단으로 비침이 없으며 건조기에 세탁해도 줄지않는 복원력!
      6. 브랜드 전문 공장에서 제작되어 탄탄한 봉제와 가성비 대비 높은 퀄리티!
      -
      Color - 블랙. 화이트
      -
      Size - M. L, XL
      -
      180/64 L 착용
      -
      M - 어깨 50 가슴 58.5 팔기장 62 총장 앞 67.5 / 뒤 70
      L - 어깨 53 가슴 59 팔기장 63 총장 앞 68.5 / 뒤 71
      XL - 어깨 54 가슴 62 팔기장 64 총장 앞 74 뒤 77
      -
      Fabric - 폴리 70% 레이온 26% 스판 4%
      `,
      create_date: 1661920032550,
    },
    {
      product_id: 6,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/257fc61e7e528b3e7cad0c853f9fb27e.webp",
      name: "아이템6",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: [""],
      summary: `
      기본중에 기본! 맨인스토어 자체제작! 감탄 레이어드 분또 티셔츠!
      2만장이상의 판매량과 수많은 후기가 입증합니다!

      check point!
      1. 브랜드에서만 사용되는 고급 기능성 분또 원단으로 탄탄하게 착용 가능!
      2. 오랜기간 입어도 줄거나 늘어남이 없는 기능성 티!
      3. 여러번의 샘플링을 통한 핏, 늘어남 없는 라운드부분에 특별히 신경써서 제작!
      4. 단품은 물론 레이어드용으로 적당한 기장감과 트랜디한 앞뒤편차의 트임!
      5. 탄탄한 원단으로 비침이 없으며 건조기에 세탁해도 줄지않는 복원력!
      6. 브랜드 전문 공장에서 제작되어 탄탄한 봉제와 가성비 대비 높은 퀄리티!
      -
      Color - 블랙. 화이트
      -
      Size - M. L, XL
      -
      180/64 L 착용
      -
      M - 어깨 50 가슴 58.5 팔기장 62 총장 앞 67.5 / 뒤 70
      L - 어깨 53 가슴 59 팔기장 63 총장 앞 68.5 / 뒤 71
      XL - 어깨 54 가슴 62 팔기장 64 총장 앞 74 뒤 77
      -
      Fabric - 폴리 70% 레이온 26% 스판 4%
      `,
      create_date: 1661920032550,
    },
  ],
});

export const bestItemState = atom<IItem[]>({
  key: "bestItem",
  default: [
    {
      product_id: 7,
      imgURL:
        "https://www.maninstore.co.kr/web/product/medium/202208/202e9b5e1bac53101a80a2a9329c6432.jpg",
      name: "베스트 아이템1",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 8,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202101/e71c044a135d60efd4c7d6392f6e3bea.jpg",
      name: "베스트 아이템2",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 9,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202102/19d61aa779e5e81b716427bfec9d7615.webp",
      name: "베스트 아이템3",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 10,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/abe2952eb0a6ec48ea5398d0eca56c4e.webp",
      name: "베스트 아이템4",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: "",
      create_date: 1661920032550,
    },
    {
      product_id: 11,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202208/efb4a570e9105f467741d72c95a0ba73.jpg",
      name: "베스트 아이템5",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 12,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/5ab379b00b1751b965eefa0b10afcf78.webp",
      name: "베스트 아이템6",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 13,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/16f6c0e6d1daaaa8b2b68d6de1812efc.jpg",
      name: "베스트 아이템7",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 14,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/cdd085868b3852150cecf805c70049b4.webp",
      name: "베스트 아이템8",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 15,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202203/2821e9dd5a749c183eb5a905c8e5631c.webp",
      name: "베스트 아이템9",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 16,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202201/b1b9535b0796569874dcf25622051c62.jpg",
      name: "베스트 아이템10",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 17,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202101/e71c044a135d60efd4c7d6392f6e3bea.jpg",
      name: "베스트 아이템11",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 18,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202208/51ed9e1bf5a03564c917bacd334cfab0.jpg",
      name: "베스트 아이템12",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 19,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/4703969b8e9d958c1e192638e00dcb46.webp",
      name: "베스트 아이템13",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 20,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202102/765bf6baa822241225f729583a0302d4.webp",
      name: "베스트 아이템14",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 21,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202103/5384047e9e686074d26bf0a9f4c2c863.jpg",
      name: "베스트 아이템15",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 22,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202202/b686ea69625b178f7dbf910e6993e16d.jpg",
      name: "베스트 아이템16",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 23,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202012/1f4e22281010cb744719b4265f525593.jpg",
      name: "베스트 아이템17",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 24,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202203/5e1fec99109cda767cf7e2590f530642.gif",
      name: "베스트 아이템18",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 25,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202109/257fc61e7e528b3e7cad0c853f9fb27e.webp",
      name: "베스트 아이템19",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST", "overnightShipping"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 26,
      imgURL:
        "https://maninstore.co.kr/web/product/medium/202111/832d0429af4688f7c54a2a529783178d.jpg",
      name: "베스트 아이템20",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["BEST"],
      summary: ".",
      create_date: 1661920032550,
    },
  ],
});

export const discountItemState = atom<IItem[]>({
  key: "discountItem",
  default: [
    {
      product_id: 27,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/11u.jpg",
      name: "할인 아이템1",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 28,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/22u.jpg",
      name: "할인 아이템1",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 29,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/zkfk1.jpg",
      name: "할인 아이템2",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 30,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/zkfk2.jpg",
      name: "할인 아이템2",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 31,
      imgURL:
        "https://maninstore.co.kr/web/upload/brushlab_new/img/shirtsss.jpg",
      name: "할인 아이템3",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 32,
      imgURL:
        "https://maninstore.co.kr/web/upload/brushlab_new/img/shirtssss.jpg",
      name: "할인 아이템3",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 33,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/xmdla1.jpg",
      name: "할인 아이템4",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 34,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/xmdla2.jpg",
      name: "할인 아이템4",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 35,
      imgURL:
        "https://maninstore.co.kr/web/upload/brushlab_new/img/wpsxmf1.jpg",
      name: "할인 아이템5",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 36,
      imgURL:
        "https://maninstore.co.kr/web/upload/brushlab_new/img/wpsxmf3-1.jpg",
      name: "할인 아이템5",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 37,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/vest1.jpg",
      name: "할인 아이템6",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
    {
      product_id: 38,
      imgURL: "https://maninstore.co.kr/web/upload/brushlab_new/img/vest2.jpg",
      name: "할인 아이템6",
      price: 25000,
      color: ["블랙"],
      size: ["M"],
      category: ["DISCOUNT"],
      summary: ".",
      create_date: 1661920032550,
    },
  ],
});

// 옵션 선택
export interface selectOption {
  color?: string | null;
  size?: string | null;
}
export const selectColorState = atom<selectOption>({
  key: "selectColorState",
  default: {
    color: null,
  },
});
export const selectSizeState = atom<selectOption>({
  key: "selectSizeState",
  default: {
    size: null,
  },
});
export const selectedItemState = atom<selectOption[]>({
  key: "selectedItemState",
  default: [
    {
      color: null,
      size: null,
    },
  ],
});

// 관심상품 등록
export const isLikedState = atom<boolean>({
  key: "isliked",
  default: false,
});

// 상세정보 탭
export interface ITabInfo {
  tab: string;
}
export const tabInfoState = atom<ITabInfo>({
  key: "tabInfo",
  default: {
    tab: "상세정보",
  },
});

export interface IReview {
  reviewId: number;
  rate: number;
  option: { size: string; color: string };
  height: number;
  weight: number;
  create_date: number;
  content: string;
  photos: string[] | null;
  userId: string;
}

// 리뷰
export const reviewState = atom<IReview[]>({
  key: "review",
  default: [],
});

// 로그인
export interface ILogin {
  username: string;
  password: string;
}

export const loginState = atom<ILogin>({
  key: "login",
  default: { username: "", password: "null" },
});

// 회원가입
export interface IJoin {
  username: string;
  password: string;
  role: string;
}

export const joinState = atom<IJoin>({
  key: "join",
  default: { username: "", password: "null", role: "ROLE_USER" },
});
