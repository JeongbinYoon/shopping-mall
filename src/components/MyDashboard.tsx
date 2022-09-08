import styled from "styled-components";
import LikedList from "./LikedList";
import QnAList from "./QnAList";
import RecentOrderList from "./RecentOrderList";
import ReviewList from "./ReviewList";

const DashBoard = styled.div`
  /* border: 1px solid yellowgreen; */
  .row1,
  .row2 {
    display: flex;
    margin-bottom: 20px;
    /* border: 1px solid #f00; */
    section:last-child {
      margin-left: 20px;
    }
  }
  /* 1023px 이하부터 아래로 떨어지게 반응 */
  @media ${(props) => props.theme.tabletS} {
    .row1,
    .row2 {
      flex-direction: column;
      section {
        width: 100%;
        margin-bottom: 15px;
      }
      section:last-child {
        margin-left: 0;
      }
    }
  }
`;

function MyDashboard() {
  return (
    <DashBoard className="dashBoard">
      <div className="row1">
        <RecentOrderList />
        <ReviewList />
      </div>
      <div className="row2">
        <LikedList />
        <QnAList />
      </div>
    </DashBoard>
  );
}
export default MyDashboard;
