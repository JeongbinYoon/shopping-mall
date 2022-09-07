import styled from "styled-components";
import RecentOrderList from "./RecentOrderList";
import ReviewList from "./ReviewList";

const DashBoard = styled.div`
  border: 1px solid yellowgreen;
  .row1 {
    display: flex;
  }
  /* 1023px 이하부터 아래로 떨어지게 반응 */
  @media ${(props) => props.theme.tabletS} {
    .row1 {
      flex-direction: column;
      section {
        width: 100%;
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
    </DashBoard>
  );
}
export default MyDashboard;
