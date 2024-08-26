import styled from "styled-components";

export const Container = styled.div`
  margin: 0 30px;
  margin-bottom: 80px;
`;

export const Title = styled.input`
  color: black;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 130%; /* 31.2px */

  border: none;
  outline: none;

  padding: 30px 0;

  && ::placeholder {
    color: #8f8f8f;
  }
`;

export const Subtitle = styled.input`
  color: black;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  border: none;
  outline: none;

  padding: 0 0 30px 0;

  && ::placeholder {
    color: #8f8f8f;
  }
`;

export const SepLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a1a1a1;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const DetailContextGroup = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 15px;
  gap: 20px;
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #FFA800;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-right: 10px;
  z-index: 1;
  position: relative; 
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const SeparatorLine = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #D3D3D3;
  left: 14px;
  bottom: 26px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFA800;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 13px;
  font-size: 17px;
font-style: normal;
font-weight: 800;
`;

export const PlusIconImg = styled.div`
  flex-direction: column;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PlusIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  fill: #FFF;
  stroke-width: 1px;
  stroke: #CBCBCB;
  border: 2px solid #CBCBCB;
  border-radius: 50%;
  margin-right: 10px;
  color: #CBCBCB;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  background-color: white;
`;

export const DeleteButton = styled.button`
  color: white;
  font-size: 12px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  padding: 6px 6px;
`;

export const DeleteButtonImg = styled.img`
  width: 15px;
  height: 15px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CounterLabel = styled.span`
  flex: 1;
  color: #8F8F8F;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
`;

export const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFA800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  margin: 0 10px;
`;

export const DetailText = styled.input`
  width: 50px;
  text-align: center;
  font-size: 16px;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: #f9f9f9;
  padding: 5px;
`;

export const PhotoUpload = styled.div`
  margin-top: 20px;
`;

export const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px; 
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const OptionButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#FFEBC4' : '#fff')};
  border: 1px solid #ccc;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  padding: 10px;
  color: #000;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 16.9px */
  height: 89px;
  width: 89px;
  
`;

export const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f5a623;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;