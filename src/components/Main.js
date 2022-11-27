import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PostModal from "./PostModal";
import { useEffect, useState } from "react";
import { getArticlesAPI } from "../actions/index";
import ReactPlayer from "react-player";

const Main = () => {
  const state = useSelector((state) => state.userState);
  const articles = useSelector((state) => state.articlesState.articles);
  const loading = useSelector((state) => state.articlesState.loading);
  console.log("loading", loading);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  useEffect(() => {
    dispatch(getArticlesAPI());
    console.log("articles", articles);
  }, []);

 
  return (
    <>
      {articles.lenght === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {state.user?.photoURL ? (
                <img src={state.user.photoURL} alt="user" />
              ) : (
                <img src="/images/user.svg" alt="user" />
              )}

              <button onClick={handleClick}>Share a post</button>
            </div>

            <div>
              <button>
                <img src="/images/photo-icon.svg" alt="photo" />
                <span>Photo</span>
              </button>

              <button>
                <img src="/images/video-icon.svg" alt="video" />
                <span>Video</span>
              </button>

              <button>
                <img src="/images/event-icon.svg" alt="event" />
                <span>Event</span>
              </button>

              <button>
                <img src="/images/article-icon.svg" alt="article" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>

          <NewPostBox onClick={handleClick} >
            <div>
              <img src="/images/new-post-flash.svg" />
              <span>New posts</span>
            </div>
          </NewPostBox>

          {loading && (
            <div style={{ width: "100%", textAlign: "center" }}>
              {" "}
              <img src="/images/spinner.gif" alt="loading" />
            </div>
          )}

          <div>
            {articles?.map((article, key) => {
              return (
                <Article key={key}>
                  <ShareActor>
                    <a>
                      <img src={article.actor.image} alt="user" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.data.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" />
                    </button>
                  </ShareActor>
                  <Description>{article.description}</Description>
                  <ShareImg>
                    {!article.shareImage && article.video ? (
                      <ReactPlayer width={"100%"} url={article.video} />
                    ) : (
                      article.shareImage && <img src={article.shareImage} />
                    )}
                  </ShareImg>
                  <SocialCount>
                    <li>
                      <button>
                        <img src="/images/like-icon.svg" alt="like" />
                        <img src="/images/clap-icon.svg" alt="clap" />
                        <img src="/images/heart-icon.svg" alt="heart" />
                        <span> farshid habibi and 75 others</span>
                      </button>
                    </li>
                    <li>
                      <a>2 comments</a>
                    </li>
                  </SocialCount>
                  <SocialAction>
                    <button>
                      <img src="/images/like-post.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comment-post.svg" alt="" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img
                        src="/images/repost-icon.png"
                        alt=""
                        style={{ width: "25px", opacity: ".7" }}
                      />

                      <span>Repost</span>
                    </button>
                    <button>
                      <img src="/images/send-post.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialAction>
                </Article>
              );
            })}
          </div>

          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  grid-area: main;
`;

const CommenCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const ShareBox = styled(CommenCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  margin-bottom:35px;
  div {
    button {
      cursor: pointer;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      padding:0 15px;
      border-radius:5px;
      transition-duration: 167ms;
      &:hover{
        background-color:rgba(0,0,0,.08);

      }
      @media(max-width:400px){
        padding:0 ;
      }
     
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        padding-left: 16px;
        background-color: rgba(0, 0, 0, 0.08);
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`;
const Article = styled(CommenCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const ShareActor = styled.div`
  padding-right: 48px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      height: 48px;
      width: 48px;
    }
    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    border: none;
    background: transparent;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const ShareImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCount = styled.ul`
  line-height: 1.33;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      background-color: white;
      border: none;
      outline: none;
      span {
        margin-left: 5px;
        font-size: 10px;
        color: rgba(0, 0, 0, 0.6);
      }

      img {
        &:nth-child(1) {
          z-index: 1;
        }
        &:nth-child(2) {
          z-index: 2;
          margin-left: -8px;
        }
        &:nth-child(3) {
          z-index: 3;
          margin-left: -8px;
        }
        width: 22px;
        height: 22px;
        padding: 2px;
        border-radius: 50%;
        background-color: white;
      }
    }
  }
`;
const SocialAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px 25px;
    background-color: white;
    border: none;
    outline: none;
    transition-duration: 167ms;
    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
      border-radius: 5px;
    }
    span {
      color: rgba(0, 0, 0, 0.6);
      font-weight: 600;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
  @media (max-width: 768px) {
    button {
      padding: 8px;
    }
  }
`;

const NewPostBox = styled.div`
  position: sticky;
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  top:100px;
  left:50%;

  div {
    position:absolute;
 
    top: -17px;
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    background-color: #0a66c2;
    color: #fff;
    font-weight: 500;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 16px;
    bottom: -20px;
    &:hover{
      background-color: #00008B;
  }
    
  }
`;

export default Main;
