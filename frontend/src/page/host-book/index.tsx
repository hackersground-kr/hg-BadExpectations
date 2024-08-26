// src/page/host-book/index.tsx

import React from 'react';
import { bookingDataList } from '../../constant/host-book/BookDummy';
import * as S from './index.style';
import YellowArrow from '../../assets/yellow_arrow.svg';

const Index = () => {
  return (
    <S.Container>
      {bookingDataList.map((booking) => (
        <S.BookHistoryContianer key={booking.id}>
          <S.BookHistory>
            <S.BookHistoryTitle>{booking.title}</S.BookHistoryTitle>
            <S.YellowArrowWrap>
              <S.YellowArrowImg src={YellowArrow} />
            </S.YellowArrowWrap>
            <S.BookHistoryDday>{booking.dday}</S.BookHistoryDday>
            <S.BookHistoryBookInfo>신청자 정보</S.BookHistoryBookInfo>
            <S.BookHistoryBooker>
              {booking.bookerName}
              <S.YellowArrowHistory>
                <S.YellowArrowImg src={YellowArrow} />
              </S.YellowArrowHistory>
            </S.BookHistoryBooker>
            <S.BookHistoryBookSite>집결장소</S.BookHistoryBookSite>
            <S.BookHistoryDetailSite>{booking.location}</S.BookHistoryDetailSite>
          </S.BookHistory>
        </S.BookHistoryContianer>
      ))}
      <S.BookDetailButton>
        <S.BookDetial> 예약 상세 보기 </S.BookDetial>
      </S.BookDetailButton>
      <S.AddButtonWrap>
        <S.AddButton>등록</S.AddButton>
      </S.AddButtonWrap>
    </S.Container>
  );
};

export default Index;