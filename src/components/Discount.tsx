import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { discountItemState } from "../atoms";

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 120px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.textColor2};
  text-align: center;
  text-decoration-line: underline;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 0 50px 0;
`;

const Item = styled.div`
  width: 750px;
  max-height: 450px;
  overflow: hidden;
  .imgBox {
    width: 95%;
    height: 95%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

// React-slick 내부 스타일링
const StyledSlider = styled(Slider)`
  .slick-slider {
    position: relative;
  }
  .slick-dots {
    height: fit-content;
    position: absolute;
    top: 50%;
    margin: 0;
    padding: 0;
    transform: rotate(90deg);

    li button {
      transform: scale(1.5);
      line-height: 20px;
    }
    li button:before {
      content: "■";
    }
  }

  .slick-slide {
    div {
      div:last-child {
        margin-bottom: 80px;
        .imgBox {
          margin-left: auto;
        }
      }
      div:first-child {
        margin-bottom: 0;
      }
    }
  }
`;

function Discount() {
  // 슬라이더 아이템
  const items = useRecoilValue(discountItemState);
  // 슬라이더 옵션
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Container>
      <Title>#Discount</Title>
      <StyledSlider {...settings}>
        {items.map((item, idx) => (
          <Item key={idx}>
            <Link to={"/"}>
              <div className="imgBox">
                <img src={item.imgURL} />
              </div>
            </Link>
          </Item>
        ))}
      </StyledSlider>
    </Container>
  );
}

export default Discount;
