import React, { useState } from 'react';
import * as S from "../host-make/index.style";

import CancelButton from "../../assets/cancel.svg";

import WifiIcon from "../../assets/wifi.svg";
import TVIcon from "../../assets/tv.svg";
import KitchenIcon from "../../assets/kitchen.svg";
import LaundryIcon from "../../assets/laundaury.svg";
import CarIcon from "../../assets/car.svg";
import IceIcon from "../../assets/ice.svg";

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
  
  return (
    <S.Container>
      <S.Title placeholder="제목을 입력해주세요" />
      <S.Subtitle placeholder="소개글을 입력해주세요" />
  
      {destinations.map((destination, index) => (
        <S.InputWrapper key={index}>
          {index > 0 && <S.SeparatorLine />}
          <S.InputGroup>
            <S.Circle>{index + 1}</S.Circle>
            <S.Input
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
  
      <S.DetailContextGroup>
        <S.CounterWrapper>
          <S.CounterLabel>최대 수용인원</S.CounterLabel>
          <S.CounterButton onClick={() => decrementCount('capacity')}>-</S.CounterButton>
          <S.DetailText type="number" readOnly value={detailCounts.capacity} />
          <S.CounterButton onClick={() => incrementCount('capacity')}>+</S.CounterButton>
        </S.CounterWrapper>
  
        <S.CounterWrapper>
          <S.CounterLabel>침대 개수</S.CounterLabel>
          <S.CounterButton onClick={() => decrementCount('beds')}>-</S.CounterButton>
          <S.DetailText type="number" readOnly value={detailCounts.beds} />
          <S.CounterButton onClick={() => incrementCount('beds')}>+</S.CounterButton>
        </S.CounterWrapper>
  
        <S.CounterWrapper>
          <S.CounterLabel>화장실 개수</S.CounterLabel>
          <S.CounterButton onClick={() => decrementCount('bathrooms')}>-</S.CounterButton>
          <S.DetailText type="number" readOnly value={detailCounts.bathrooms} />
          <S.CounterButton onClick={() => incrementCount('bathrooms')}>+</S.CounterButton>
        </S.CounterWrapper>
  
        <S.CounterWrapper>
          <S.CounterLabel>방 개수</S.CounterLabel>
          <S.CounterButton onClick={() => decrementCount('rooms')}>-</S.CounterButton>
          <S.DetailText type="number" readOnly value={detailCounts.rooms} />
          <S.CounterButton onClick={() => incrementCount('rooms')}>+</S.CounterButton>
        </S.CounterWrapper>
      </S.DetailContextGroup>
  
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
  
      <S.AddButton>등록</S.AddButton>
    </S.Container>
  );
}

export default HostMake