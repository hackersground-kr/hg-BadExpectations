import styled from "styled-components";

export const login = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    width: 393px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const textFieldWrap = styled.div`
  border-radius: 13px;
  border: 1px solid #FFA800;

` 
export const textField = styled.input`
  width: 259px;
  height: 46px;
  flex-shrink: 0;
  background: #FFF;
  &:focus {
    outline: none;
  }
  &::placeholder{
  padding-left: 13px;
  color: #9B9B9B;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
	}
`