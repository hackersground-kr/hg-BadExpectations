import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    height: 37px;
    border-radius: 100px;
    border-width: 1.5px;
    border-color: #ffa800;
    border-style: solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

export const SearchInputContainer = styled.div`
    display: flex;
    margin-left: 12px;
    width: 80%;
    height: 25px;
    align-items: center;
`;

export const Divider = styled.div`
    display: flex;
    width: 3px;
    height: 15px;
    background-color: #ffa800;
`;

export const Input = styled.input`
    font-size: 14px;
    font-weight: 600;
    color: #cdcdcd;
    outline: none;
    border-style: none;

    &::placeholder {
        font-size: 14px;
        font-weight: 600;
        color: #cdcdcd;
    }
    &
`;

export const IconContainer = styled.div`
    margin-right: 12px;
    width: 25px;
    height: 25px;
`;

export const IconImage = styled.img`
    width: 100%;
    height: 100%;
`;
