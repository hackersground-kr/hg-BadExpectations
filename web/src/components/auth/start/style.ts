import styled,{keyframes} from "styled-components";
import mainRectangle from "../../assets/Group 3.svg";
const mouthAni = keyframes`
0%{
    left: 35px;
}
80%{
    transform: matrix(100deg);
}
100%{
    left: 23px;
}
`

export const auth = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    translate: 1s ease-in-out;
`
export const main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
margin-top: 100px;
min-width: 309px;
width: 40%;
height: 376px;
flex-shrink: 0;
border-radius: 13px;
background: #F8F8F8;
img{
    position: absolute;
    left: calc(100vw - 80vw);
    bottom: -30px;
}
`
export const logoMain = styled.div`
    display: flex;
    justify-content: end;
    min-width: 309px;
    height: 100%;
    padding: 30px;
`

export const logo = styled.img`
 display: flex;
flex-direction: column;
align-items: center;
 width: 166px;
 height: 184px;
`
export const loginText = styled.div`
    margin-top: 80px;
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    h2{
color: #FFA800;
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
    }
`
export const buttonMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;
    width: 100%;
    height: 150px;
`
export const userButton = styled.div`
display: flex;
cursor: pointer;
min-width: 259px;
width: 70%;
height: 46px;
border-radius: 13px;
border: 1px #FFA800;
justify-content: center;
align-items: center;
background: #FFA800;
color: #FFF;
p{
    font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 800;
line-height: normal;
}

`
export const onBordingSrceen  =styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: #fff;
`
export const Logo = styled.div`
position: relative;
display: flex;
width: 166px;
height: 184px;
`
export const mouthImg = styled.img`
position: absolute;
width: 24.76px;
height: 24.76px;
top: 125px;
animation-name: ${mouthAni};
animation-duration: 1s;
animation-fill-mode: forwards;
`