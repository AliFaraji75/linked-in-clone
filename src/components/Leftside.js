import styled from 'styled-components'
import { useSelector } from "react-redux";

const Leftside = () => {
    const state =useSelector(state=>state.userState )
    return ( 
        <Container>
            <ArtCard>
            <UserInfo>
                <BackgroundCard  />
                <a>
                    <Photo />
                    <Link> Wellcome, {state.user?.displayName}</Link>
                </a>
                <a>
                    <AddPhotoText>
                        Add a photo
                    </AddPhotoText>

                 </a>
            </UserInfo>

            <Widget>

                <a>
                    <div>
                        <span>Connections</span>
                        <span>Grow your network</span>
                    </div>
                    <img  src='/images/widget-icon.svg' alt='a'/>
                </a>
            </Widget>
            <Item>
                <span>
                    <img src='/images/item-icon.svg' alt='a'/>
                    My Items
                </span>
            </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>
                        Groups
                    </span>
               </a>
               <a>
                 <span>
                    Events
                    <img  src='/images/plus-icon.svg' alt='plus-icon'/>
                </span>
               </a>
               <a>
                <span>Follow Hashtags</span>
               </a>
               <a>
                  <span>Discover more</span>
               </a>
            </CommunityCard>
        </Container>
     );
}
 const Container=styled.div`
 grid-area:leftside
 `
 const ArtCard =styled.div`
 text-align: center;
 margin-bottom: 8px;
 background-color: #fff;
 transition: bx-shadow 167ms;
 border-radius: 5px;
 position: relative;
 border:none;
 box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);


 `
 const UserInfo=styled.div`
 border-bottom: 1px solid rgba(0,0,0,.15);
 padding: 12px 12px 16px;
 word-wrap: break-word;
 word-break: break-word;
 `
 const BackgroundCard=styled.div`
 background: url('/images/card-bg.svg');
 background-position: center;
 background-size: 462px;
 height: 54px;
 margin:-12px -12px 0
 `
 const Photo=styled.div`
 background-image: url('/images/photo.svg');
 box-shadow: none;
 width: 72px;
 height: 72px;
 background-position: center;
 background-color: white;
 background-size:60%;
 background-clip: content-box;
 background-repeat:no-repeat;
 border: 3px solid white;
 margin:-40px auto 12px;
 border-radius: 50%;
 `
 const Link=styled.div`
     font-size: 16px;
     font-weight:600;
     line-height: 1.5;
     color:rgba(0,0,0,.8)
 `
 const AddPhotoText=styled.div`
 color:#0a66c2;
 margin-top:4px;
 line-height: 1.33;
 font-size: 12px;
 font-weight: 400;
 `
const   Widget= styled.div`
border-bottom: 1px solid rgba(0,0,0,.15);
padding-top: 12px;
padding-bottom:12px;
a{
    font-weight: 600;
    text-decoration: none;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:4px 12px;
    &:hover{
        background-color: rgba(0,0,0,.08);
    }
    div{
        display:flex;
        flex-direction: column;
        text-align: left;
        span{
            font-size: 12px;
            line-height: 1.33;
            &:first-child{
                color:rgba(0,0,0,.6)
            }
        }
    }
}
`
const Item =styled.a`
border-color: rgba(0,0,0,.8);
text-align: left;
padding: 12px;
display: block;
span{
    display: flex;
    align-items: center;
    
}
&:hover{
        background-color: rgba(0,0,0,.08);
    }
`
const CommunityCard=styled(ArtCard)`
padding:8px 0 0;
text-align:left;
display:flex;
flex-direction: column;
a{
    font-size:12px;
    padding:4px 12px 4px 12px;
    font-weight:600;
    &:hover{
        color:#0a66c2;
    }
    span{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    &:last-child{
        color:rgba(0,0,0,.6);
        padding:12px;
        border-top:1px solid #d6cec2;
        text-decoration:none;
        &:hover{
            background-color: rgba(0,0,0,.08);
        }
    }

}
`
export default Leftside;