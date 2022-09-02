import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectColorState, selectSizeState } from "../atoms";
import Header from "../components/Header";
import itemData from "../detail.json";

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
      border: 1px solid ${(props) => props.theme.borderColor};
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
          cursor: pointer;
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
        height: 50px;
        margin-right: 10px;
        background-color: transparent;
        font-size: 18px;
        border: 1px solid ${(props) => props.theme.borderColor};
        cursor: pointer;
      }
      .likeBtn {
        min-width: 50px;
        border-radius: 50%;
      }
      .cartBtn {
        width: 50%;
      }
      .buyBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin: 0%;
        background-color: ${(props) => props.theme.buttonColor};
        color: ${(props) => props.theme.textColorWhite};
        font-size: 18px;
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

  // 옵션 선택
  const [color, setColor] = useRecoilState<any>(selectColorState);
  const [size, setSize] = useRecoilState<any>(selectSizeState);
  const colorClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setColor(e.currentTarget.innerText);
  };
  const sizeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSize(e.currentTarget.innerText);
  };

  // 옵션 모두 선택 시 아이템 생성 후 초기화
  useEffect(() => {
    console.log(color, size);
    if (color && size) {
      setColor(null);
      setSize(null);
    }
  }, [color, size]);

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
                  <div key={color} onClick={colorClick}>
                    {color}
                  </div>
                ))}
              </div>

              <div className="itemSize">
                <span>사이즈</span>
                {itemDetail.size.map((size) => (
                  <div key={size} onClick={sizeClick}>
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="itemTotal">total: 0 (0개)</div>

            <div className="itemButtons">
              <button className="likeBtn">♡</button>
              <button className="cartBtn">장바구니</button>
              <Link to={"/"} className="buyBtn">
                구매하기
              </Link>
            </div>
          </div>
        </DetailArea>
        <PrdDetail></PrdDetail>
      </Container>
    </>
  );
}

export default Product_detail;
