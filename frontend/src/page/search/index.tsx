import SearchBar from "../../components/searchbar";

const Search = () => {
    return (
        <div style={{display:'flex', flexDirection: 'column',width:393, height:728, paddingTop: 23, alignItems: 'center'}}>
            <SearchBar isPressAble={true}/>
        </div>
    )
}

export default Search