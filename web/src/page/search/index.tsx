import SearchBar from "../../components/searchbar";
import Icon2 from "../../assets/Group 2.svg"

const Search = () => {
    return (
        <div style={{display:'flex', flexDirection: 'column',width:393, height:728, paddingTop: 23, alignItems: 'center'}}>
            <SearchBar isPressAble={true}/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={Icon2} alt={"icon"} style={{width: 121, height: 135.1, marginTop: 178, marginBottom: 49}}/>
                <text style={{fontSize: 14, fontWeight: 'bold'}}>검색된 여행이 없어요 ㅜㅜ</text>
                <text style={{fontSize: 14, fontWeight: 'bold'}}>올바른 검색어인지 확인해주세요</text>
            </div>
        </div>
    )
}

export default Search