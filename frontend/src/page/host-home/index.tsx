import React from 'react'
import * as S from "../host-home/index.style";

import bookDummyData from "../../constant/host-home/BookDummy";
import PopularDummyData from "../../constant/host-home/PopluarDummy";

const Index = () => {
    return (
      <S.AllContainer>
        <S.ChallengeBoxWrap>
          <S.ChallengeBox />
        </S.ChallengeBoxWrap>
        <S.MyTripManage>내 여행 관리</S.MyTripManage>
        <S.MyTripManageBoxContainer>
          <S.MyTripManageBox>
            <S.BookBoxContainer>
              {bookDummyData.map((item, index) => (
                <S.BookBox key={index}>
                  <S.BookBoxTitle>{item.title}</S.BookBoxTitle>
                  <S.BookBoxName>{item.name}</S.BookBoxName>
                  <S.BookBoxDate>{item.date}</S.BookBoxDate>
                </S.BookBox>
              ))}
            </S.BookBoxContainer>
            <S.MyPopularTrip>나의 인기 여행</S.MyPopularTrip>
            <S.MyPopularTripBoxContainer>
            {PopularDummyData.map((ratings, index) => (
              <S.MyPopularTripBox key={index}>
                <S.MyPopularTripBoxTitle>{ratings.tourName}</S.MyPopularTripBoxTitle>
                <S.MyPopularTripBoxBook>{ratings.bookHistory}</S.MyPopularTripBoxBook>
                <S.MyPopularTripBoxRating> ★ {ratings.rating} </S.MyPopularTripBoxRating>
              </S.MyPopularTripBox>
            ))}
          </S.MyPopularTripBoxContainer>
          </S.MyTripManageBox>
        </S.MyTripManageBoxContainer>
      </S.AllContainer>
    )
  }
  
  export default Index;