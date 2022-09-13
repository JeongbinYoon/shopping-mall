import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { IAddress, addressState } from "../atoms";

const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const Btn = styled.button`
  height: 40px;
  margin: 0;
  margin-right: 5px;
  padding: 0 10px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  &:focus {
    outline: 1px solid ${(props) => props.theme.pointColor};
  }
`;

function Postcode() {
  const postcodeRef = useRef<HTMLDivElement | null>(null);

  const [adressState, setAdressState] = useRecoilState<IAddress>(addressState);
  const loadLayout = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function ({ zonecode, address }) {
          console.log(zonecode, address);
          setAdressState({
            zonecode,
            address,
          });
        },
      });
      postcode.open();
    });
  };

  useEffect(() => {
    const isAlready = document.getElementById(id);

    if (!isAlready) {
      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      document.body.append(script);
    }
  }, []);

  return (
    <Btn onClick={loadLayout}>우편번호 찾기</Btn>
    //   <div ref={postcodeRef}></div>
  );
}

export default Postcode;
