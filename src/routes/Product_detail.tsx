import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import itemData from "../detail.json";

// interface RouteState {
//   item: {
//     product_id: number;
//     imgURL: string;
//     name: string;
//     price: number;
//     discountRate?: number;
//     color: string[];
//     size: string[];
//     category: string[];
//     summary: string;
//     create_date: number;
//     update_date?: number;
//   };
// }

const Container = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  margin-top: 150px;
  border: 1px solid #f00;
`;

const DetailArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .imgBox {
    width: 600px;
    height: 700px;
    margin-right: 5%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .itemInfo {
    width: 600px;
    .itemName {
      color: ${(props) => props.theme.textColor};
      font-size: 24px;
      font-weight: 700;
    }
    .itemSummary {
      color: ${(props) => props.theme.textColor2};
      font-size: 14px;
      margin-top: 20px;
      line-height: 1.5em;
    }
    .itemPrice {
      margin-top: 10px;
      color: ${(props) => props.theme.textColor};
      font-size: 20px;
      span {
        display: block;
      }
    }
    .itemOption {
      margin-top: 30px;
      padding: 15px;
      border: 1px solid #333;
      font-size: 14px;
      .itemColor {
        margin: 20px 0 10px 0;
      }
      .itemColor,
      .itemSize {
        display: flex;
        margin-left: 20px;
        span {
          width: 50px;
          margin-right: 50px;
        }
        div {
          margin-right: 5px;
          padding: 10px;
          border: 1px solid #ccc;
        }
      }
    }
    .itemTotal {
      margin: 20px 0;
      text-transform: uppercase;
      font-size: 20px;
      text-align: right;
    }
    .itemButtons {
      display: flex;
      button {
        background-color: transparent;
        border: 1px solid #333;
        height: 50px;
      }
      .likeBtn {
        width: 50px;
      }
      .buyBtn {
        width: 50%;
      }
      .cartBtn {
        width: 50%;
      }
    }
  }
`;

const PrdDetail = styled.div``;

function Product_detail() {
  // 상품 번호 파라미터
  const { productId } = useParams();

  // 요청해서 받은 데이터
  const data = itemData;
  const itemDetail = data.itemDetail;

  console.log(data);
  return (
    <>
      <Header />
      <Container>
        <DetailArea>
          <div className="imgBox">
            <img src={itemDetail.thumbnail} alt="대표이미지" />
          </div>
          <div className="itemInfo">
            <h2 className="itemName">{itemDetail.name}</h2>
            <div className="itemPrice">
              <span className="Price">
                KRW {itemDetail.price.toLocaleString()}
              </span>
              <span className="dcPrice">
                KRW{" "}
                {(
                  itemDetail.price -
                  Math.floor((itemDetail.price * itemDetail.discountRate) / 100)
                ).toLocaleString()}
              </span>
            </div>
            <pre className="itemSummary">{itemDetail.summary}</pre>

            <div className="itemOption">
              <span>옵션</span>
              <div className="itemColor">
                <span>색상</span>
                {itemDetail.color.map((color) => (
                  <div>{color}</div>
                ))}
              </div>

              <div className="itemSize">
                <span>사이즈</span>
                {itemDetail.size.map((size) => (
                  <div>{size}</div>
                ))}
              </div>
            </div>

            <div className="itemTotal">total: 0 (0개)</div>

            <div className="itemButtons">
              <button className="likeBtn">♡</button>
              <button className="cartBtn">장바구니</button>
              <button className="buyBtn">구매하기</button>
            </div>
          </div>
        </DetailArea>
        <PrdDetail></PrdDetail>
      </Container>
    </>
  );
}

export default Product_detail;
