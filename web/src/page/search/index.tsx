import SearchBar from "../../components/searchbar";
import Icon2 from "../../assets/Group 2.svg"
import {useState, useEffect} from "react";
import {GuideType} from "../../types/GuideType";
import {atom, useAtom} from "jotai";
import {isRender} from "../../store/authtype/authtype.atom";
import {useNavigate, useNavigation} from "react-router-dom";

const Search = () => {

    const [renderList, setRenderList] = useState<GuideType[]>([]);

    const [isRend, setIsRend] = useAtom(isRender);

    useEffect(() => {
        console.log(isRend);
        isRend &&
        setRenderList([
            {
                title: "산속 휴양지",
                startAt: new Date("2024-09-01T15:00:00"),
                endAt: new Date("2024-09-10T11:00:00"),
                limitPeople: 8,
                price: 500000,
                description: "자연과 함께하는 평온한 휴식을 위한 산속 휴양지입니다.",
                wifi: true,
                tv: true,
                kitchen: true,
                washingMachine: true,
                airConditioner: false,
                parking: true,
                bedCnt: 4,
                bathroomCnt: 2,
                roomCnt: 3,
                address: "강원도 춘천시 산길로 123",
                guideKind: "자연",
                places: [
                    { latitude: "37.8813", longitude: "127.7298", name: "소양강댐", seq: "1" },
                    { latitude: "37.6830", longitude: "127.7236", name: "남이섬", seq: "2" },
                ],
                files: { path: "/images/mountain_retreat.jpg" },
                userId: "user123",
            },
            {
                title: "도심 아파트",
                startAt: new Date("2024-10-05T14:00:00"),
                endAt: new Date("2024-10-12T10:00:00"),
                limitPeople: 4,
                price: 300000,
                description: "모든 편의시설이 가까운 도심 속 현대적인 아파트입니다.",
                wifi: true,
                tv: true,
                kitchen: true,
                washingMachine: true,
                airConditioner: true,
                parking: false,
                bedCnt: 2,
                bathroomCnt: 1,
                roomCnt: 2,
                address: "서울특별시 강남구 도산대로 456",
                guideKind: "도심",
                places: [
                    { latitude: "37.5665", longitude: "126.9780", name: "명동", seq: "1" },
                    { latitude: "37.5796", longitude: "126.9770", name: "경복궁", seq: "2" },
                ],
                files: { path: "/images/city_apartment.jpg" },
                userId: "user456",
            },
            {
                title: "해변가 빌라",
                startAt: new Date("2024-07-15T12:00:00"),
                endAt: new Date("2024-07-25T10:00:00"),
                limitPeople: 10,
                price: 1000000,
                description: "바로 앞에 바다가 보이는 고급스러운 해변가 빌라입니다.",
                wifi: true,
                tv: true,
                kitchen: true,
                washingMachine: true,
                airConditioner: true,
                parking: true,
                bedCnt: 5,
                bathroomCnt: 3,
                roomCnt: 4,
                address: "부산광역시 해운대구 해운대해변로 789",
                guideKind: "럭셔리",
                places: [
                    { latitude: "35.1587", longitude: "129.1603", name: "해운대 해수욕장", seq: "1" },
                    { latitude: "35.1531", longitude: "129.1183", name: "광안리 해수욕장", seq: "2" },
                ],
                files: { path: "/images/beachside_villa.jpg" },
                userId: "user789",
            },
            {
                title: "전원 주택",
                startAt: new Date("2024-11-20T14:00:00"),
                endAt: new Date("2024-11-30T11:00:00"),
                limitPeople: 6,
                price: 400000,
                description: "조용하고 평화로운 전원에서의 휴식을 즐길 수 있는 주택입니다.",
                wifi: true,
                tv: false,
                kitchen: true,
                washingMachine: true,
                airConditioner: false,
                parking: true,
                bedCnt: 3,
                bathroomCnt: 2,
                roomCnt: 3,
                address: "경기도 가평군 청평면 전원로 101",
                guideKind: "농촌",
                places: [
                    { latitude: "37.8194", longitude: "127.5498", name: "청평호", seq: "1" },
                    { latitude: "37.6915", longitude: "127.4917", name: "아침고요수목원", seq: "2" },
                ],
                files: { path: "/images/countryside_cottage.jpg" },
                userId: "user101",
            },
            {
                title: "스키 롯지",
                startAt: new Date("2024-12-15T16:00:00"),
                endAt: new Date("2024-12-22T10:00:00"),
                limitPeople: 12,
                price: 800000,
                description: "스키와 스노우보드를 즐기기에 최적의 위치에 있는 아늑한 스키 롯지입니다.",
                wifi: true,
                tv: true,
                kitchen: true,
                washingMachine: true,
                airConditioner: false,
                parking: true,
                bedCnt: 6,
                bathroomCnt: 4,
                roomCnt: 5,
                address: "강원도 평창군 대관령면 스키장로 202",
                guideKind: "모험",
                places: [
                    { latitude: "37.6318", longitude: "128.6823", name: "용평리조트", seq: "1" },
                    { latitude: "37.6455", longitude: "128.7006", name: "알펜시아리조트", seq: "2" },
                ],
                files: { path: "/images/ski_lodge.jpg" },
                userId: "user202",
            },
            {
                title: "사막 오아시스",
                startAt: new Date("2024-08-10T13:00:00"),
                endAt: new Date("2024-08-18T11:00:00"),
                limitPeople: 5,
                price: 600000,
                description: "아름다운 석양과 평화로운 환경을 갖춘 사막 속의 오아시스입니다.",
                wifi: true,
                tv: false,
                kitchen: true,
                washingMachine: false,
                airConditioner: true,
                parking: true,
                bedCnt: 3,
                bathroomCnt: 2,
                roomCnt: 2,
                address: "제주특별자치도 서귀포시 오아시스로 303",
                guideKind: "독특한 경험",
                places: [
                    { latitude: "33.4648", longitude: "126.5312", name: "성산일출봉", seq: "1" },
                    { latitude: "33.3868", longitude: "126.5600", name: "섭지코지", seq: "2" },
                ],
                files: { path: "/images/desert_oasis.jpg" },
                userId: "user303",
            },
            {
                title: "호숫가 집",
                startAt: new Date("2024-06-01T15:00:00"),
                endAt: new Date("2024-06-08T11:00:00"),
                limitPeople: 7,
                price: 700000,
                description: "개인 선착장을 갖춘 아름다운 호숫가 집으로, 다양한 수상활동을 즐길 수 있습니다.",
                wifi: true,
                tv: true,
                kitchen: true,
                washingMachine: true,
                airConditioner: true,
                parking: true,
                bedCnt: 4,
                bathroomCnt: 3,
                roomCnt: 4,
                address: "경기도 양평군 강변로 404",
                guideKind: "휴식",
                places: [
                    { latitude: "36.5482", longitude: "128.2122", name: "양평 강상산", seq: "1" },
                    { latitude: "36.5150", longitude: "128.3042", name: "두물머리", seq: "2" },
                ],
                files: { path: "/images/lake_house.jpg" },
                userId: "user404",
            }]
        );
    }, [])

    const navigate= useNavigate();

    return (
        <div style={{display:'flex', flexDirection: 'column',width:393, height:728, paddingTop: 23, alignItems: 'center'}}>

            <div style={{display: 'flex' , width: "100%", flexDirection: 'column', alignItems: 'center', marginBottom: !renderList.length ? 1 : 50}}>
                <SearchBar isPressAble={true}/>
            </div>
            {
                !renderList.length ?
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={Icon2} alt={"icon"}
                         style={{width: 121, height: 135.1, marginTop: 178, marginBottom: 49}}/>
                    <text style={{fontSize: 14, fontWeight: 'bold'}}>검색된 여행이 없어요 ㅜㅜ</text>
                    <text style={{fontSize: 14, fontWeight: 'bold'}}>올바른 검색어인지 확인해주세요</text>
                </div> : renderList.map((item, index) => (
                        <div onClick={() => {navigate("/subscribe")}} style={{display: 'flex', width: 330, height: 377, flexDirection: 'column', marginBottom: 10, marginTop: index == 0 ? -60 : 0}}>
                            <div style={{display: 'flex', width: 330, height: 304, backgroundColor: "", alignItems: 'flex-end', justifyContent: 'center'}}>
                                <div style={{display: 'flex',width: "100%", height: "85%", backgroundColor: "#EFEFEF", overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
                                    <img src={index == 0 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZD18WqlldmwfcqbOGwHq8Xwa9yYSi4XLRg&s" : index == 1 ? "https://www.grandculture.net/Image?localName=uiseong&id=GC052P00016&t=middle" : index == 3 ? "https://img.asiatoday.co.kr/file/2015y/08m/05d/2015080501000431000021441.jpg" : index == 4 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtRBzCDigMEvYk_W5ROweRtdXJ1Nex9ajiQ&s" : "https://menu.moneys.co.kr/moneyweek/thumb/2024/04/23/06/2024042312232060098_1.jpg/dims/optimize/"} style={{width: '100%', height: '100%'}}/>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: 330,
                                height: 73
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    width: 330,
                                    height: 29,
                                    justifyContent: 'space-between'
                                }}>
                                    <text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</text>
                                    <text style={{fontSize: 16, fontWeight: 'bold'}}>★ 4.8</text>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    width: 330,
                                    height: 34,
                                    justifyContent: 'space-between',
                                }}>
                                    <text style={{
                                        fontSize: 13,
                                        fontWeight: "700",
                                        marginTop: 10,
                                        color: "#777"
                                    }}>{`${item.places.map((item) => (`${item.name} ➡`))}`.slice(0, -1)}</text>
                                    <text style={{
                                        fontSize: 13,
                                        fontWeight: "700",
                                        color: "#aeaeae"
                                    }}>{`${index == 2 ? "이해준" : index == 4 ? "배채희" : index == 5 ? "김의현" : index == 7 ? "김동찬" : "의성군시"} - ${index != 0 ? Math.floor((((index + 10 - index * 2) * 1000) ^ 2)/index * 100) : 15000}원`}</text>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Search