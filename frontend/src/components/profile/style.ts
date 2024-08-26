import styled from "styled-components";

export const main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 393px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const mainProfile = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const logoutButton = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 306px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 13px;
    background: #FFA800;
    margin-bottom: 16px;

    color: #FFF;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 800;
line-height: 130%; /* 18.2px */
`
export const profileView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    
`
export const profileUser = styled.div`
    position: relative;
    display: flex;
    width: 306px;
    height: 162px;
    flex-shrink: 0;
    border-radius: 13px;
    border: 1px solid #DEDEDE;
    background: #FFF;
    justify-content: center;
    align-items: center;
    img{
    display: flex;
    
        width:100px;
        height: 53px;
    
    }
`
export const profileName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 150px;
    p:nth-child(1){
        color: #000;
    font-family: Urbanist;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 20%; 
    letter-spacing: 0.2px;
    }
    p:nth-child(2){
    margin-left: 2px;
    color: #000;
    font-family: Urbanist;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20%; 
    letter-spacing: 0.2px;
    }
`