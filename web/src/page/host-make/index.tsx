import React, {useEffect, useState} from 'react';
import * as S from "../host-make/index.style";

import CancelButton from "../../assets/cancel.svg";

import WifiIcon from "../../assets/wifi.svg";
import TVIcon from "../../assets/tv.svg";
import KitchenIcon from "../../assets/kitchen.svg";
import LaundryIcon from "../../assets/laundaury.svg";
import CarIcon from "../../assets/car.svg";
import IceIcon from "../../assets/ice.svg";
import selectorImg1 from "../../assets/image 5.svg";
import selectorImg2 from "../../assets/Group 42.svg";
import selectorImg3 from "../../assets/Group 43.svg";
import selectorImg4 from "../../assets/Group 44.svg";

type DetailCountField = 'capacity' | 'beds' | 'bathrooms' | 'rooms';

const HostMake = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [destinations, setDestinations] = useState<string[]>(['']);

  const [detailCounts, setDetailCounts] = useState({
    capacity: 0,
    beds: 0,
    bathrooms: 0,
    rooms: 0,
  });

  const incrementCount = (field: DetailCountField) => {
    setDetailCounts(prevState => ({
      ...prevState,
      [field]: prevState[field] + 1
    }));
  };

  const [formData, setFormData] = useState({
    title: '',
    startAt: '',
    endAt: '',
    limitPeople: 0,
    price: 0,
    description: '',
    wifi: false,
    tv: false,
    kitchen: false,
    washingMachine: false,
    airConditioner: false,
    parking: false,
    bedCnt: 0,
    bathroomCnt: 0,
    roomCnt: 0,
    address: '',
    guideKind: "EXPERIENCE",
    places: [],
    files: [],
    userId: 'uiseong',
  });

  const decrementCount = (field: DetailCountField) => {
    setDetailCounts(prevState => ({
      ...prevState,
      [field]: prevState[field] > 0 ? prevState[field] - 1 : 0
    }));
  };

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const addDestination = () => {
    setDestinations([...destinations, '']);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDestinationChange = (index: number, value: string) => {
    const newDestinations = [...destinations];
    newDestinations[index] = value;
    setDestinations(newDestinations);
  };

  const removeDestination = (index: number) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
  };


  const options = [
    { label: '와이파이', icon: WifiIcon },
    { label: 'TV', icon: TVIcon },
    { label: '주방', icon: KitchenIcon },
    { label: '세탁기', icon: LaundryIcon },
    { label: '주차', icon: CarIcon },
    { label: '에어컨', icon: IceIcon }
  ];

  const [indexSelectorNum, setIndexSelector] = useState(1);

  const getDaysInMonth = (year: number, month: number) => {
    return new Array(new Date(year, month, 0).getDate()).fill(null).map((_, index) => index + 1);
  };

  useEffect(() => {
    switch (indexSelectorNum) {
      case 1:
        setFormData({...formData, guideKind: "NATURE"});
        break;
      case 2:
        setFormData({...formData, guideKind: "FOOD"});
        break;
      case 3:
        setFormData({...formData, guideKind: "REST"});
        break;
      case 4:
        setFormData({...formData, guideKind: "EXPERIENCE"});
        break;
    }
  },[indexSelectorNum])

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

  const getPlaces = () => {
    return destinations.map((destination, index) => ({
      latitude: '35.129', // Fixed value
      longitude: '129.129', // Fixed value
      name: destination,
      seq: String(index + 1)
    }));
  };

  const handleSubmit = async () => {
    const guideDto = {
      ...formData,
      startAt: startDate ? new Date(startDate).toISOString().split('T')[0] : '',
      endAt: endDate ? new Date(endDate).toISOString().split('T')[0] : '',
      places: getPlaces(),
    };

    try {
      const response = await fetch('http://localhost:8080/guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(guideDto),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Guide successfully created');
      // Handle successful submission here
    } catch (error) {
      console.error('Error creating guide:', error);
      // Handle error here
    }
  };


  const [isToggleCalendar, setToggleCalendar] = useState<boolean>(false)

  return (
      <S.Container>
        <S.Title name="title" value={formData.title} onChange={handleInputChange} placeholder="제목을 입력해주세요" />
        <S.Subtitle name="description" value={formData.description} onChange={handleInputChange} placeholder="소개글을 입력해주세요" />

        {destinations.map((destination, index) => (
            <S.InputWrapper key={index}>
              {index > 0 && <S.SeparatorLine />}
              <S.InputGroup>
                <S.Circle>{index + 1}</S.Circle>
                <S.Input
                    name={`destination-${index}`}
                    placeholder="목적지를 입력해주세요"
                    value={destination}
                    onChange={(e) => handleDestinationChange(index, e.target.value)}
                />
                <S.DeleteButton onClick={() => removeDestination(index)}>
                  <S.DeleteButtonImg src={CancelButton} />
                </S.DeleteButton>
              </S.InputGroup>
            </S.InputWrapper>
        ))}

        <S.ButtonGroup>
          <S.PlusIconImg>
            <S.PlusIcon>+</S.PlusIcon>
          </S.PlusIconImg>
          <S.AddButton onClick={addDestination}>
            추가하기
          </S.AddButton>
        </S.ButtonGroup>

        <S.SepLine />

        <S.SelectCategoryListContainer>
          <S.ScrollContent>
            <S.Item style={{opacity: indexSelectorNum == 1 ? 1 : 0.3}} onClick={() => {setIndexSelector(1)}}>
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
            <S.Item style={{opacity: indexSelectorNum == 2 ? 1 : 0.3}} onClick={() => {setIndexSelector(2)}}>
              <div style={{display: "flex", flexDirection: 'column'}}>
                <img src={selectorImg2} alt={"sle"} style={{width: 100, height: 100}}/>
                <span style={{display: 'flex',width: "100%", height: 30, fontSize: 14, alignItems: 'center', justifyContent: 'center'}}>자연</span>
              </div>
            </S.Item>
            <S.Item style={{opacity: indexSelectorNum == 3 ? 1 : 0.3}} onClick={() => {setIndexSelector(3)}}>
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
            <S.Item style={{opacity: indexSelectorNum == 4 ? 1 : 0.3}} onClick={() => {setIndexSelector(4)}}>
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
        <S.Input
            style={{width:'96%', height:27.5, borderRadius: 10, marginTop: 10, marginBottom: 20, marginLeft: -5}}
            placeholder="가격을 입력해주세요"
            onChange={(e) => {setFormData({...formData, price: Number(e.target.value)})}}
        />

        <S.DetailContextGroup>
          <S.CounterWrapper>
            <S.CounterLabel>최대 수용인원</S.CounterLabel>
            <S.CounterButton onClick={() => setFormData({ ...formData, limitPeople: formData.limitPeople - 1 })}>-</S.CounterButton>
            <S.DetailText type="number" readOnly name="limitPeople" value={formData.limitPeople} />
            <S.CounterButton onClick={() => setFormData({ ...formData, limitPeople: formData.limitPeople + 1 })}>+</S.CounterButton>
          </S.CounterWrapper>

          <S.CounterWrapper>
            <S.CounterLabel>침대 개수</S.CounterLabel>
            <S.CounterButton onClick={() => setFormData({ ...formData, bedCnt: formData.bedCnt - 1 })}>-</S.CounterButton>
            <S.DetailText type="number" readOnly name="bedCnt" value={formData.bedCnt} />
            <S.CounterButton onClick={() => setFormData({ ...formData, bedCnt: formData.bedCnt + 1 })}>+</S.CounterButton>
          </S.CounterWrapper>

          <S.CounterWrapper>
            <S.CounterLabel>화장실 개수</S.CounterLabel>
            <S.CounterButton onClick={() => setFormData({ ...formData, bathroomCnt: formData.bathroomCnt - 1 })}>-</S.CounterButton>
            <S.DetailText type="number" readOnly name="bathroomCnt" value={formData.bathroomCnt} />
            <S.CounterButton onClick={() => setFormData({ ...formData, bathroomCnt: formData.bathroomCnt + 1 })}>+</S.CounterButton>
          </S.CounterWrapper>

          <S.CounterWrapper>
            <S.CounterLabel>방 개수</S.CounterLabel>
            <S.CounterButton onClick={() => setFormData({ ...formData, roomCnt: formData.roomCnt - 1 })}>-</S.CounterButton>
            <S.DetailText type="number" readOnly name="roomCnt" value={formData.roomCnt} />
            <S.CounterButton onClick={() => setFormData({ ...formData, roomCnt: formData.roomCnt + 1 })}>+</S.CounterButton>
          </S.CounterWrapper>
        </S.DetailContextGroup>

          <S.AddButton onClick={() => {setToggleCalendar(prev => !prev)}}>행사 기간 선택</S.AddButton>
            <div style={{
              display: 'flex',
              width: 330,
              height: isToggleCalendar ? 350 : 0,
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: 'column',
              transition: "height 0.4s ease-in-out"
            }}>
              { isToggleCalendar && <>
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
              </>}
          </div>


  <S.PhotoUpload>
    <S.AddButton>사진 등록</S.AddButton>
  </S.PhotoUpload>

  <S.OptionContainer>
          {options.map(option => (
              <S.OptionButton
                  key={option.label}
                  selected={selectedOptions.includes(option.label)}
                  onClick={() => toggleOption(option.label)}
              >
                <S.OptionIcon src={option.icon} alt={option.label} />
                {option.label}
              </S.OptionButton>
          ))}
        </S.OptionContainer>

        <S.AddButton onClick={handleSubmit}>등록</S.AddButton>
      </S.Container>
  );
}

export default HostMake;
