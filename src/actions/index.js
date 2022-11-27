import { async } from "@firebase/util";
import { auth, provider, storage } from "../firebase";
import { SET_USER ,GET_ARTICLES,SET_LOADING} from "./actions";
import db from '../firebase'
export const signInAPI = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((userinfo) => {
        dispatch({ type: SET_USER, payload: userinfo.user });
        console.log("payload.user", userinfo.user);
      })
      .catch((error) => {
        alert(error.message);
        console.log("payload");
      });
  };
};
export const signOutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: SET_USER, payload: null });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch({type:SET_LOADING,payload:true})
    if (payload.image != "") {
      const upload = storage
        .ref(`image/${payload.image.name}`)
        .put(payload.image);
      upload.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`progress: ${progress}%`);
        if (snapshot.state === "RUNNING") {
          console.log(`progressrunning: ${progress}%`);
        }
      },(error)=>console.log("error",error),
      async()=>{
        const downloadURL= await upload.snapshot.ref.getDownloadURL();
        db.collection("articles").add({
          actor:{
            description:payload.user.email,
            title:payload.user.displayName,
            data:payload.timestamp,
            image:payload.user.photoURL
          },
          video:payload.video,
          shareImage:downloadURL,
          comments:0,
          description:payload.description,
        })
        dispatch({type:SET_LOADING,payload:false})
      }
      );
    }else if(payload.video){
      db.collection("articles").add({
        actor:{
          description:payload.user.email,
          title:payload.user.displayName,
          data:payload.timestamp,
          image:payload.user.photoURL
        },
        video:payload.video,
        shareImage:"",
        comments:0,
        description:payload.description,
      })
      dispatch({type:SET_LOADING,payload:false})
    }else{
      db.collection("articles").add({
        actor:{
          description:payload.user.email,
          title:payload.user.displayName,
          data:payload.timestamp,
          image:payload.user.photoURL
        },
        video:"",
        shareImage:"",
        comments:0,
        description:payload.description,
      })
         dispatch({type:SET_LOADING,payload:false})

    }
  };
};

export const getArticlesAPI=()=>{
  return (dispatch)=>{
    dispatch({type:SET_LOADING,payload:true})
    let payload;
     db.collection("articles").orderBy("actor.data","desc")
     .onSnapshot((snapshot)=>{
      payload=snapshot.docs.map(doc=>doc.data());
      dispatch({type:GET_ARTICLES,payload:payload})
      dispatch({type:SET_LOADING,payload:false})
      console.log("getpay",payload)

     })
  }
}