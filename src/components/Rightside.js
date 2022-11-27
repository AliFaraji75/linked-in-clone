import styled from "styled-components";
const Rightside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h4>Add to your feed </h4>
          <img src="/images/feed-icon.svg" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkdin</span>
              <button> Follow</button>
            </div>
          </li>

          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#video</span>
              <button> Follow</button>
            </div>
          </li>
        </FeedList>
        <RecomMendation>
          view all recommendations
          <img src="/images/right-icon.svg" />
        </RecomMendation>
      </FollowCard>
      <BannerCard>
        <img
          src="/images/right-side.png"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
     
      padding: 16px 22px;
      align-items: center;
      border-radius: 25px;
      font-weight: 600;
      display: inline-flex;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      border:2px solid rgba(0, 0, 0, 0.4);
      transition-duration:167ms;
      &:hover{
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
        
          background-color:  rgba(0, 0, 0, 0.07);
      }
  
    }
  }
`;
const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  width: 48px;
  height: 48px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 8px;
`;
const RecomMendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const BannerCard = styled(FollowCard)`


 
  img {
  
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Rightside;
