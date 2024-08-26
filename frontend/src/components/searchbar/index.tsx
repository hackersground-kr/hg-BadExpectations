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

const SearchBar = () => {
    return (
        <SearchBarContainer>
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
