import React from 'react'
import * as S from "../host-home/index.style";


const index = () => {
  return (
    <S.AllContainer>
        <S.ChallengeBoxWrap>
            <S.ChallengeBox/>
        </S.ChallengeBoxWrap>
        <S.MyTripManage>내 여행 관리</S.MyTripManage>
        <S.MyTripManageBoxContainer>
            <S.MyTripManageBox>
                <S.BookBoxContainer>
                    <S.BookBox>
                        갬성투어
                    </S.BookBox>
                    <S.BookBox>
                        갬성투어
                    </S.BookBox>
                    <S.BookBox>
                        갬성투어
                    </S.BookBox>
                </S.BookBoxContainer>
                <S.MyPopularTrip>나의 인기 여행</S.MyPopularTrip>
                <S.MyPopularTripBoxContainer>
                    <S.MyPopularTripBox>dd</S.MyPopularTripBox>
                    <S.MyPopularTripBox>dd</S.MyPopularTripBox>
                    <S.MyPopularTripBox>dd</S.MyPopularTripBox>
                </S.MyPopularTripBoxContainer>
            </S.MyTripManageBox>
        </S.MyTripManageBoxContainer>
    </S.AllContainer>
  )
}

export default index
