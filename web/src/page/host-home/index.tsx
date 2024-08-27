import React, {useEffect, useState} from 'react'
import * as S from "../host-home/index.style";

import bookDummyData from "../../constant/host-home/BookDummy";
import PopularDummyData from "../../constant/host-home/PopluarDummy";
import banner1 from "../../assets/Group 47.svg";
import banner2 from "../../assets/Group 48.svg";
import banner3 from "../../assets/Group 49.svg";

const Index = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        banner1,
        banner2,
        banner3,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
      <S.AllContainer>
        <S.ChallengeBoxWrap>
            <div>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}/>
                <div>
                    {images.map((_, index) => (
                        <span key={index} style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            alignSelf: 'center',
                            marginTop: -20,
                            marginLeft: 148 + (index * 15),
                            fontSize: 9,
                            color: index == currentIndex ? "#888" : "#DADADA"
                        }}
                              onClick={() => setCurrentIndex(index)}>
                                {'●'}
                            </span>
                    ))}
                </div>
            </div>
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