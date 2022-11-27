import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import { postArticleAPI } from "../actions";
const PostModal = ({ showModal, handleClick }) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const state = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const postArticles = (e) => {
    e.preventDefault();
    console.log("pay");

    const payload = {
      image: shareImage,
      video: videoLink,
      user: state.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    console.log("pay", payload);
    dispatch(postArticleAPI(payload));
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    setEditorText("");
    handleClick();
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const handleChange = (e) => {
    const image = e.target.files[0];
    console.log(image);
    if (image === "" || image === undefined) {
      return alert(`not an image, the file is a ${typeof image}`);
    }
    setShareImage(image);
  };

  const closeModal = () => {
    handleClick();
    setEditorText("");
  };
  return (
    <>
      {showModal && (
        <Container>
          <Content>
            <Header>
              <h3>create a post</h3>
              <button onClick={closeModal}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <ShareContent>
              <UserInfo>
                {state.user?.photoURL ? (
                  <img src={state.user.photoURL} alt="user" />
                ) : (
                  <img src="/images/user.svg" alt="user" />
                )}
                <span>{state.user?.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif,image/png,image/jpeg"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file" style={{ cursor: "pointer" }}>
                        click for selecte an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "video" && (
                    <>
                      <input
                        type="text"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        placeholder="Please input a video link"
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </ShareContent>
            <SheraActions>
              <LeftButtnsActions>
                <button onClick={() => switchAssetArea("image")}>
                  <img src="/images/share-img.svg" alt="" />
                </button>
                <button onClick={() => switchAssetArea("video")}>
                  <img src="/images/share-video.svg" alt="" />
                </button>
              </LeftButtnsActions>
              <RightButtonsActions>
                <ShareComment>
                  <button>
                    <img src="/images/share-comment.svg" alt="" />
                    <span>Anyone</span>
                  </button>
                </ShareComment>

                <Post
                  disabled={!editorText ? true : false}
                  onClick={(event)=>postArticles(  event)}
                >
                  Post
                </Post>
              </RightButtonsActions>
            </SheraActions>
          </Content>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999999;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: block;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;

  button {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: 50%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background: transparent;
  padding: 8px 12px;
  vertical-align: baseline;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 40px;
    height: 40px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const SheraActions = styled.div`
  padding: 12px 12px 20px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftButtnsActions = styled.div`
  display: flex;
  button {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 50%;
    transition-duration: 167ms;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
const RightButtonsActions = styled.div`
  padding: 5px 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Post = styled.button`
  min-width: 60px;
  border-radius: 20px;
  color: ${(props) => (props.disabled ? "rgba(0,0,0,.2)" : "white")};
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,.15)" : "#0a66c2"};
  padding: 8px 16px;
  border: none;
  outline: none;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  font-size: 16px;
  &:hover {
    background-color: ${(props) => (props.disabled ? "" : "#004182")};
  }
`;
const ShareComment = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    padding: 8px 14px;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    background-color: white;
    border-radius: 18px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    span {
      margin-left: 5px;
      font-weight: 500;
      font-size: 15px;
    }
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  margin-bottom: 20px;
  textarea {
    padding: 5px;
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
export default PostModal;
