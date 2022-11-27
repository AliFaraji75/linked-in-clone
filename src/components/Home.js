import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useLayoutEffect } from "react";
const Home = (props) => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.userState);
 
  useEffect(() => {
    if (!state.user) {
      navigate("/", { replace: true });
      console.log("layout");
      console.log("user", state.user);
    }
  }, [state])
  console.log("pageYOffset", window.pageYOffset);
  
  return (
    <Container>
      {!state.user === null ? (
        ""
      ) : (
        <>
          <Section>
            <h5>
              <a> Hiring in a hurry? - </a>
            </h5>
            <p>
              Find talented pros in record time with Upwork and keep business
              moving
            </p>
          </Section>
          <Layout>
            <Leftside />
            <Main />
            <Rightside />
          </Layout>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  padding-top: 55px;
  max-width: 100%;
`;
const Section = styled.section`
  min-height: 50px;
  padding-top: 25px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  margin-top: 0px;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: 20% 50% 25%;
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
;