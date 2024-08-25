import styled from "styled-components";

export const AllContainer = styled.div`
 padding: 0px 30px 0 30px;
`

export const ChallengeBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const ChallengeBox = styled.div`
  display: flex;
  width: 330px;
  height: 137px;
  border-radius: 13px;
  border: 1px solid #DEDEDE;
`

export const MyTripManage = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 160%; /* 20.8px */
    letter-spacing: 0.2px;

    margin-top: 35px;
`

export const MyTripManageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  z-index: 1;
`

export const MyTripManageBox = styled.div`
    width: 330px;
    height: 400px;

    border-radius: 13px;
    border: 1px solid #DEDEDE;

`

export const BookBoxContainer = styled.div`
    padding: 24px 14px;
    display: flex;
    flex-direction: row; 
    overflow-x: auto; 
    gap: 10px; 
`

export const BookBox = styled.div`
    flex-shrink: 0;
    width: 176px;
    height: 72px;

    border-radius: 13px;
    border: 1px solid #DEDEDE;

    background: #FFF;
`

export const MyPopularTrip = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 160%; /* 20.8px */
    letter-spacing: 0.2px;

    margin: 20px 0 0 14px;
`

export const MyPopularTripBoxContainer = styled.div`
    display: flex;
    margin: 10px 14px 0 14px;

    flex-direction: column; 
    overflow-y: auto;
    max-height: 200px; 
    gap: 10px; 
    padding-right: 10px; 
    position: relative;
    z-index: 1; 
`

export const MyPopularTripBox = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 81px;

    border-radius: 13px;
    border: 1px solid #DEDEDE;
`