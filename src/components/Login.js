import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signInAPI } from "../actions";
import { useEffect } from "react";

const Login = (props) => {
  const navigate =useNavigate()
  const dispatch =useDispatch();
 
  const state =useSelector(state=>state.userState )
  console.log(state)
  useEffect(() => {
    if (state.user) {
      navigate("/home", { replace: true });
    
    }
  }, [state])
  return (
    <Container>
      {state.user && navigate("/home",{replace:true}) }
      <Nav>
        <a>
          <img src="/images/logo.png" alt="linkdin-logo" />
        </a>
        <div>
          <Join>Join us</Join>
          <Signin> Sing in</Signin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Wellcome to your porfessional community</h1>
          <img src="/images/back.svg" alt="hero" />
        </Hero>
        <Form >
          <Google onClick={()=>dispatch(signInAPI())}>
            <img src="/images/google-logo.png " alt="google" />
                Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  padding: 0;
`;
const Nav = styled.div`
  max-width: 1228px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a > img {
    width: 135px;
    height: 65px;
    @media (max-width: 768px) {
      width: 100px;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 0;
  }
`;
const Join = styled.a`
  padding: 15px 20px;
  margin-right: 15px;
  border-radius: 25px;
  font-size: 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    color: rgba(0, 0, 0, 0.7);
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Signin = styled.a`
  border: 2px solid #0a66c2;
  padding: 15px 20px;
  border-radius: 25px;
  color: #0a66c2;
  font-size: 16px;
  font-weight: 600;
  transition-duration: 150ms;
  text-align: center;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 138px;
  padding: 68px 0;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  align-items: center;
  margin: auto;
  width: 100%;
  min-height: 700px;
  max-width: 1128px;
 
 
 
  @media (max-width: 768px) {
    min-height: 0;
    margin: auto;
  }
`;
const Hero = styled.div`
width: 100%;
position: relative;
  h1 {
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      width: 100%;
      line-height: 2;
    }
  
  }
  img{
   position: absolute;
       width: 550px;
    height: 550;
    top :-20px;
    right: -70px;
      @media (max-width:768px){
       width:400px;
         top :230px;
     position: initial;
     height: 300px;
     margin:0 auto;
      }
    }
`;
const Form =styled.div`
  margin-top: 150px;
  width: 550px;

   
@media (max-width:768px){
  margin-top: 20px;
  display: flex;
  justify-content:center
      }
`;
const Google =styled.button`
padding:0 40px ;
display: flex;
justify-content: center;
align-items: center;
background-color:#fff;
height: 50px;
width: 80%;
border-radius: 25px;
transition-duration: 167ms;
font-size:19px;
color: rgba(0,0,0,.6);
box-shadow:inset 0 0 0 1px rgb(0 0 0 /60%)
inset 0 0 0 2px rgb(0 0 0 /0%) inset 0 0 0 1px rgb(0 0 0 /0%);
&:hover{
  background-color: rgba(207,207,207,.25);
  color: rgba(0,0,0,.75)
}

img {
  width: 30px;
  height: 30px;
  margin-right: 5px;

}
@media (max-width:768px){
  padding:0  ;
  height: 40px;
width: 90%;
      }

`;
