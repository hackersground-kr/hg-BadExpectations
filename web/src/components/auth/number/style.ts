import styled from "styled-components";

export const login = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    min-width: 393px;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const textFieldWrap = styled.div`
  min-width: 259px;
  width: 70%;
  height: 46px;
  border-radius: 13px;
  border: 1px solid #FFA800;
  background-color: #FFF;

` 

export const textField = styled.input`
  margin-left: 10px;
  width: 90%;
  height: 90%;
  border-radius: 13px;
  border: none;
  flex-shrink: 0;
  background: #FFF;
  &:focus {
    outline: none;
  }
  &::placeholder{
  color: #9B9B9B;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
	}
`
export const buttonMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 19px;
    width: 100%;
    height: 150px;
`
export const startButton = styled.div`
  display: flex;
  min-width: 259px;
  width: 70%;
  height: 46px;
  background-color: #FFA800;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  color: #FFF;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  cursor: pointer;
`
export const bottomWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  z-index: 3;
  gap: 9px;
`
export const navText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20px;
  gap: 10px;
  
  span{
    text-decoration: underline;
    color: #FFA800;
font-family: Pretendard;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
z-index: 3;
cursor: pointer;
  }
`