import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IItem } from "../atoms";

interface ISlider {
  settings: ISettings;
  items: IItem[];
}

interface ISettings {
  /** 슬라이더 아이템 요소 */
  children?: React.ReactNode;
  /** 슬라이더 도트 여부 */
  dots?: boolean;
  /** 무한 스와이프 여부 */
  infinite?: boolean;
  /** 한 화면에 보이는 슬라이드 개수 */
  slidesToShow?: number;
  /** 한번에 슬라이드 되는 개수 */
  slidesToScroll?: number;
  /** 스와이프 여부 */
  swipeToSlide?: boolean;
  /** 마우스 오버시 일시정지 여부 */
  pauseOnHover?: boolean;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 */
  autoplay?: boolean;
  /** 자동 재생 속도 */
  autoplaySpeed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

const Item = styled.div`
  padding: 0 5%;
  img {
    width: 100%;
  }
  .itemName {
    font-size: 14px;
    margin: 20px 0;
  }
  .itemPrice {
    font-size: 12px;
  }
`;

const Carousel = ({ settings, items }: ISlider) => {
  return (
    <Slider {...settings}>
      {items.map((item: IItem, idx: number) => (
        <Item key={idx}>
          <Link to={`/product/${item.product_id}`}>
            <img src={item.imgURL} alt="" />
          </Link>
          <div className="itemName">
            <Link to={`/product/${item.product_id}`}>
              <span>{item.name}</span>
            </Link>
          </div>
          <span className="itemPrice">KRW {item.price}</span>
        </Item>
      ))}
    </Slider>
  );
};

export default Carousel;
