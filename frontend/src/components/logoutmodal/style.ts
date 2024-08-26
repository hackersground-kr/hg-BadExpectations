import styled from "styled-components";

export const outmain = styled.div`
top: 0;

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.40);
    z-index: 10;
`
export const group = styled.div`
    display: flex;
    width: 224px;
    height: 246px;
    padding: 20px 18px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 13px;
    background: #F8F8F8;
`
export const logoImg = styled.img`
width: 136px;
height: 133px;
`
export const selectGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 50px;
`
export const selectButton = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 86px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 0.5px solid #BABABA;
    background: #FFF;
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
export const selectButtonSec = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 3px;
    background: #FFA800;
    color: #FFF;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; 
`