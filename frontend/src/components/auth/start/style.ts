import styled from "styled-components";
import mainRectangle from "../../assets/Group 3.svg";

export const auth = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 393px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
margin-top: 100px;
width: 309px;
height: 376px;
flex-shrink: 0;
border-radius: 13px;
background: #F8F8F8;
img{
    position: absolute;
    left: 120px;
    bottom: -30px;
}
`
export const logoMain = styled.div`
    display: flex;
    justify-content: end;
    width: 309px;
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
width: 259px;
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