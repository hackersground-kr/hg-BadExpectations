import styled from "styled-components";
import headerLogo from "../../../assets/headerLogo.svg";
import dismissIcon from "../../../assets/dismissIcon.svg";

// Container 컴포넌트
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 393px;
    height: 852px;
`;

// Header 컴포넌트
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 28px;
    margin-top: 46px;
    margin-bottom: 37px;
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: 35px;
`;

// Logo 컴포넌트
export const Logo = styled.img.attrs({ src: headerLogo, alt: 'Logo' })`
    width: 26px;
    height: 28px;
    margin-right: 5px;
`;

// HeaderText 컴포넌트
export const HeaderText = styled.span`
    font-size: 16px;
    font-weight: 800;
    color: #ffa800;
    margin-bottom: -3px;
`;

// DismissButton 컴포넌트
export const DismissButton = styled.div`
    display: flex;
    width: 100%;
    height: 24px;
    margin-bottom: 15px;
    margin-left: 31px;
    justify-content: flex-start;
    align-items: flex-start;
`;

// DismissIcon 컴포넌트
export const DismissIcon = styled.img.attrs({ src: dismissIcon, alt: 'dismissIcon' })`
    width: 24px;
    height: 24px;
`;

// SearchSection 컴포넌트
export const SearchSection = styled.div<{
    isToggle: boolean;
    toggleHeight: string;
}>`
    display: flex;
    width: 330px;
    height: ${(props) => (props.isToggle ? props.toggleHeight : "51px")};
    border-radius: 13px;
    border: 1px solid #dedede;
    align-self: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 9px;
    transition: height 0.4s ease-in-out;
    cursor: pointer;
    overflow: hidden;
`;

// SearchText 컴포넌트
export const SearchText = styled.span`
    font-size: 16px;
    font-weight: 800;
    color: #000800;
    align-self: flex-start;
    margin-left: 28px;
    margin-top: 19px;
    margin-bottom: 12px;
`;

export const SearchSectionTitleFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 100%;
`;

export const SearchSectionTitle = styled.span<{ isTitle: boolean }>`
    color: ${(props) => (props.isTitle ? "#000" : "#8A8A8A")};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`;

export const CustomCalendar = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    margin-top: 10px;
`;

export const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 10px;
`;

export const HeaderButton = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export const DayWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(43px, 0.8fr));
    grid-row-gap: 13px;
`;

export const CalendarItem = styled.div<{ $isSunday: boolean }>`
    color: ${props => (props.$isSunday ? 'red' : 'black')};
    margin-bottom: 12px;
`;

export const Day = styled.div<{
    $isCurrentMonth: boolean;
    $isSelectedDate: boolean;
    $isInRange: boolean;
    $isSunday: boolean
}>`
    opacity: ${props => (props.$isCurrentMonth ? '1' : '0.5')};
    background-color: ${props => (props.$isSelectedDate ? 'rgba(255,168,0,0.37)' : props.$isInRange ? 'rgba(255,168,0,0.2)' : 'transparent')};
    color: ${props => (props.$isSunday ? 'red' : 'black')};
    cursor: pointer;
    width: 30px;
    height: 22px;
    margin-left: -10px;
    border-radius: 5px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const SelectedDate = styled.span`
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    margin-left: -6.4px;
    margin-top: -40px;
`;

export const SelectCategoryListContainer = styled.div`
    margin-top: 16px;
    overflow: hidden;
    width: 82%;
    overflow-x: auto;
    white-space: nowrap;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0);
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ScrollContent = styled.div`
    display: inline-block;
`;

export const Item = styled.div<{ bgColor?: string }>`
    display: inline-block;
    width: 100px;
    height: 130px;
    margin-right: 15px;
    border-radius: 10px;
`;

export const CountIndex = styled.div<{
    height : number;
}>`
    display: flex;
    flex-direction: row;
    width: 298px;
    align-self: center;
    align-items: center;
    height: ${(props) => props.height}px;
    border-bottom: #E2E2E2 solid 1px;
    justify-content: space-between;
`

export const CountTitle = styled.span`
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-left: -6.4px;
`

export const CountDescription = styled.span`
    color: #969696;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-left: -6.4px;
`