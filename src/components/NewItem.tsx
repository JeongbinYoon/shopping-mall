import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import { useRecoilValue } from "recoil";
import { newItemState } from "../atoms";

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 80px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.textColor2};
  text-align: center;
  text-decoration-line: underline;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 0 50px 0;
`;

function NewItem() {
  // 슬라이더 아이템
  const items = useRecoilValue(newItemState);

  // 슬라이더 옵션
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <Container>
      <Title>#new arrivals</Title>
      <Carousel settings={settings} items={items} />
    </Container>
  );
}

export default NewItem;
