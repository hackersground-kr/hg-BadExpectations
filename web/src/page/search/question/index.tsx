import React, {useEffect, useState} from "react";
import * as S from "./index.style";
import SearchBar from "../../../components/searchbar";
import { useNavigate } from "react-router-dom";
import selectorImg1 from "../../../assets/image 5.svg";
import selectorImg2 from "../../../assets/Group 42.svg";
import selectorImg3 from "../../../assets/Group 43.svg";
import selectorImg4 from "../../../assets/Group 44.svg";
import plusIcon from "../../../assets/Group 45 (1).svg";
import minusIcon from "../../../assets/Group 46 (1).svg";
import Number from "../../../components/auth/number";

const SearchQuestion = () => {
    const getDaysInMonth = (year: number, month: number) => {
        return new Array(new Date(year, month, 0).getDate()).fill(null).map((_, index) => index + 1);
    };

    const getStartOfMonth = (year: number, month: number) => {
        return new Date(year, month - 1, 1);
    };

    const getEndOfMonth = (year: number, month: number) => {
        return new Date(year, month, 0);
    };

    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const startOfMonth = getStartOfMonth(currentYear, currentMonth + 1);
    const endOfMonth = getEndOfMonth(currentYear, currentMonth + 1);
    const startOfFirstWeek = new Date(startOfMonth);
    const endOfLastWeek = new Date(endOfMonth);

    startOfFirstWeek.setDate(startOfFirstWeek.getDate() - startOfFirstWeek.getDay());
    endOfLastWeek.setDate(endOfLastWeek.getDate() + (6 - endOfLastWeek.getDay()));

    const days = [];
    for (let d = new Date(startOfFirstWeek); d <= endOfLastWeek; d.setDate(d.getDate() + 1)) {
        days.push(new Date(d));
    }

    const [adults, setAdults] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [baby, setBaby] = useState<number>(0);
    const [pet, setPet] = useState<number>(0);

    const navigate = useNavigate();
    const [indexNum, setIndexNum] = useState(1);
    const [indexSelectorNum, setIndexSelector] = useState(0);

    const changeMonth = (increment: number) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + increment);
            return newDate;
        });
    };

    const changeYear = (increment: number) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setFullYear(prevDate.getFullYear() + increment);
            return newDate;
        });
    };

    const handleDateClick = (selectedDate: string) => {
        if (!startDate) {
            setStartDate(selectedDate);
        } else if (!endDate && selectedDate > startDate) {
            setEndDate(selectedDate);
        } else if (startDate && endDate) {
            setStartDate(selectedDate);
            setEndDate(null);
        } else if (startDate === selectedDate) {
            setStartDate(null);
        } else {
            setEndDate(null);
        }
    };

    const isDateInRange = (date: string) => {
        if (startDate && endDate) {
            return date >= startDate && date <= endDate;
        }
        return false;
    };

    return (
        <S.Container>
            <S.Header>
                <S.Logo />
                <S.HeaderText>의성올래</S.HeaderText>
            </S.Header>
            <S.DismissButton onClick={() => navigate("/search")}>
                <S.DismissIcon />
            </S.DismissButton>
            <S.SearchSection
                isToggle={indexNum === 1}
                toggleHeight="262px"
                onClick={() => setIndexNum(1)}
            >
                {indexNum === 1 ? (
                    <>
                        <S.SearchText>어디에 가고 싶나요?</S.SearchText>
                        <SearchBar isPressAble={false} width={"82%"} />
                        <S.SelectCategoryListContainer>
                            <S.ScrollContent>
                                <S.Item style={{opacity: indexSelectorNum == 1 ? 1 : 0.3}} onClick={() => {setIndexSelector(prev => prev == 1 ? 0 : 1)}}>
                                    <div style={{display: "flex", flexDirection: 'column'}}>
                                        <img src={selectorImg1} alt={"sle"} style={{width: 100, height: 100}} />
                                        <span style={{
                                            display: 'flex',
                                            width: "100%",
                                            height: 30,
                                            fontSize: 14,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>음식</span>
                                    </div>
                                </S.Item>
                                <S.Item style={{opacity: indexSelectorNum == 2 ? 1 : 0.3}} onClick={() => {setIndexSelector(prev => prev == 2 ? 0 : 2)}}>
                                    <div style={{display: "flex", flexDirection: 'column'}}>
                                        <img src={selectorImg2} alt={"sle"} style={{width: 100, height: 100}}/>
                                        <span style={{display: 'flex',width: "100%", height: 30, fontSize: 14, alignItems: 'center', justifyContent: 'center'}}>자연</span>
                                    </div>
                                </S.Item>
                                <S.Item style={{opacity: indexSelectorNum == 3 ? 1 : 0.3}} onClick={() => {setIndexSelector(prev => prev == 3 ? 0 : 3)}}>
                                    <div style={{display: "flex", flexDirection: 'column'}}>
                                        <img src={selectorImg3} alt={"sle"} style={{width: 100, height: 100}}/>
                                        <span style={{
                                            display: 'flex',
                                            width: "100%",
                                            height: 30,
                                            fontSize: 14,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>휴식</span>
                                    </div>
                                </S.Item>
                                <S.Item style={{opacity: indexSelectorNum == 4 ? 1 : 0.3}} onClick={() => {setIndexSelector(prev => prev == 4 ? 0 : 4)}}>
                                    <div style={{display: "flex", flexDirection: 'column'}}>
                                        <img src={selectorImg4} alt={"sle"} style={{width: 100, height: 100}}/>
                                        <span style={{
                                            display: 'flex',
                                            width: "100%",
                                            height: 30,
                                            fontSize: 14,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>체험</span>
                                    </div>
                                </S.Item>
                            </S.ScrollContent>
                        </S.SelectCategoryListContainer>
                    </>
                ) : (
                    <S.SearchSectionTitleFrame>
                        <S.SearchSectionTitle isTitle={true}>장소</S.SearchSectionTitle>
                        <S.SearchSectionTitle isTitle={false}>장소추가</S.SearchSectionTitle>
                    </S.SearchSectionTitleFrame>
                )}
            </S.SearchSection>
            <S.SearchSection
                isToggle={indexNum === 2}
                toggleHeight="384px"
                onClick={() => setIndexNum(2)}
            >
                <S.SearchSectionTitleFrame>
                    {indexNum === 2 ? (
                        <div style={{display: "flex", width: "100%", height: "100%", flexDirection: "column"}}>
                            <S.SearchText style={{alignSelf: 'flex-start' ,marginLeft: -0.5}}>언제 여행을 떠나나요?</S.SearchText>
                            <S.CustomCalendar>
                                <S.CalendarHeader>
                                    <S.HeaderButton onClick={() => changeYear(-1)}>{"⏴"}</S.HeaderButton>
                                    <S.HeaderButton onClick={() => changeMonth(-1)}>{"⏴"}</S.HeaderButton>
                                    <S.HeaderText>{`${currentYear}.${String(currentMonth + 1).padStart(2, '0')}`}</S.HeaderText>
                                    <S.HeaderButton onClick={() => changeMonth(1)}>{"⏵"}</S.HeaderButton>
                                    <S.HeaderButton onClick={() => changeYear(1)}> {"⏵"}</S.HeaderButton>
                                </S.CalendarHeader>
                                <S.DayWrapper>
                                    {["일", "월", "화", "수", "목", "금", "토"].map((week, index) => (
                                        <S.CalendarItem $isSunday={index === 0} key={week}>
                                            {week}
                                        </S.CalendarItem>
                                    ))}
                                </S.DayWrapper>
                                <S.DayWrapper>
                                    {days.map((day) => {
                                        const dayOfMonth = day.getDate();
                                        const isCurrentMonth = day.getMonth() === currentMonth;
                                        const isSunday = day.getDay() === 0;
                                        const formattedDate = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(dayOfMonth).padStart(2, '0')}`;

                                        return (
                                            <S.Day
                                                key={formattedDate}
                                                onClick={() => handleDateClick(formattedDate)}
                                                $isCurrentMonth={isCurrentMonth}
                                                $isSelectedDate={formattedDate === startDate || formattedDate === endDate}
                                                $isInRange={isDateInRange(formattedDate)}
                                                $isSunday={isSunday}
                                            >
                                                <span>{dayOfMonth}</span>
                                            </S.Day>
                                        );
                                    })}
                                </S.DayWrapper>
                            </S.CustomCalendar>
                            <S.SelectedDate>선택된 날짜 : {startDate} {endDate && `~ ${endDate}`}</S.SelectedDate>
                        </div>
                    ) : (
                        <>
                            <S.SearchSectionTitle isTitle={true}>일정</S.SearchSectionTitle>
                            <S.SearchSectionTitle isTitle={false}>일정 추가</S.SearchSectionTitle>
                        </>
                    )}
                </S.SearchSectionTitleFrame>
            </S.SearchSection>
            <S.SearchSection
                isToggle={indexNum === 3}
                toggleHeight="308px"
                onClick={() => setIndexNum(3)}
            >
                {
                    indexNum === 3 ?
                        <div style={{display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: 'flex-start'}}>
                            <S.SearchText style={{alignSelf: 'flex-start', marginLeft: 25}}>누구랑 같이 가나요?</S.SearchText>
                            <S.CountIndex height={67}>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: 18.5}}>
                                    <S.CountTitle>
                                        성인
                                    </S.CountTitle>
                                    <S.CountDescription>
                                        13세 이상
                                    </S.CountDescription>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginRight: 14,
                                }}>
                                    <img src={minusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => {
                                        setAdults(prev => prev < 1 ? prev : prev - 1)
                                    }}/>
                                    <text style={{
                                        fontSize: 18,
                                        marginTop: 5,
                                        marginRight: 2,
                                        marginLeft: 14,
                                        width: 26
                                    }}>{adults}</text>
                                    <img src={plusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => setAdults(prev => prev+1)}/>
                                </div>
                            </S.CountIndex>
                            <S.CountIndex height={67}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    marginLeft: 18.5
                                }}>
                                    <S.CountTitle>
                                        어린이
                                    </S.CountTitle>
                                    <S.CountDescription>
                                        4세 ~ 12세
                                    </S.CountDescription>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginRight: 14,
                                    marginBottom: 12.5
                                }}>
                                    <img src={minusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => setChildren(prev => prev < 1 ? prev : prev - 1)}/>
                                    <text style={{
                                        fontSize: 18,
                                        marginTop: 5,
                                        marginRight: 2,
                                        marginLeft: 14,
                                        width: 26
                                    }}>{children}</text>
                                    <img src={plusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => setChildren(prev => prev+1)}/>
                                </div>
                            </S.CountIndex>
                            <S.CountIndex height={67}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    marginLeft: 18.5
                                }}>
                                    <S.CountTitle>
                                        유아
                                    </S.CountTitle>
                                    <S.CountDescription>
                                        4세 이하
                                    </S.CountDescription>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginRight: 14,
                                    marginBottom: 12.5
                                }}>
                                    <img src={minusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => setBaby(prev => prev < 1 ? prev : prev - 1)}/>
                                    <text style={{
                                        fontSize: 18,
                                        marginTop: 5,
                                        marginRight: 2,
                                        marginLeft: 14,
                                        width: 26
                                    }}>{baby}</text>
                                    <img src={plusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => setBaby(prev => prev+1)}/>
                                </div>
                            </S.CountIndex>
                            <S.CountIndex style={{borderStyle: 'none', marginTop: 3}} height={60}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    marginLeft: 18.5,
                                    marginTop: -9
                                }}>
                                    <S.CountTitle>
                                        애완동물
                                    </S.CountTitle>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginRight: 14,
                                    marginBottom: 12.5
                                }}>
                                    <img src={minusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => setPet(prev => prev < 1 ? prev : prev - 1)}/>
                                    <text style={{
                                        fontSize: 18,
                                        marginTop: 5,
                                        marginRight: 2,
                                        marginLeft: 14,
                                        width: 26,
                                    }}>{pet}</text>
                                    <img src={plusIcon} style={{width: 30, height: 30}} alt={'plusMinus'} onClick={() => setPet(prev => prev+1)}/>
                                </div>
                            </S.CountIndex>
                        </div> :
                        <S.SearchSectionTitleFrame>
                            <S.SearchSectionTitle isTitle={true}>인원</S.SearchSectionTitle>
                            <S.SearchSectionTitle isTitle={false}>인원 추가</S.SearchSectionTitle>
                        </S.SearchSectionTitleFrame>
                }
            </S.SearchSection>
            <div style={{
                width: 325,
                height: 32,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center",
                marginTop: 20,
            }}>
                <span style={{marginTop: 4, marginLeft: 2, fontWeight: '600'}} onClick={() => {
                    setAdults(0);
                    setChildren(0);
                    setBaby(0);
                    setPet(0);
                    setStartDate(null);
                    setEndDate(null);
                    setIndexSelector(0)
                }}>전체 초기화</span>
                <div style={{display: 'flex' ,width: 105, height: "100%", backgroundColor: '#FFA800', alignItems: 'center', justifyContent: 'center', color: "#FFF", fontWeight: "600"}} onClick={() => {console.log(adults, children, baby, pet, startDate, endDate, indexSelectorNum)}}>
                    검색하기
                </div>
            </div>
        </S.Container>
    );
};

export default SearchQuestion;
