import React from "react";
import {
    SearchBarContainer,
    SearchInputContainer,
    Divider,
    Input,
    IconContainer,
    IconImage
} from "./index.style";

import searchIcon from "../../assets/searchIcon.svg";
import {useNavigate} from "react-router-dom";

const SearchBar = ({isPressAble, width} : {isPressAble : boolean, width? : string}) => {

    const navigate = useNavigate();

    return (
        <SearchBarContainer style={{width: width? width : "82%"}} onClick={() => {
            if (isPressAble) {
                navigate("/search/question");
            }
        }}>
            <SearchInputContainer>
                <Input type="text" placeholder="원하는 여행을 찾아보세요" />
            </SearchInputContainer>
            <IconContainer>
                <IconImage src={searchIcon} alt="icon" />
            </IconContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;
