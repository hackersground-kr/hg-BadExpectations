import bicon from "../../assets/Group 51.svg"
import dismoss from "../../assets/Group 53.svg"
import gongu  from "../../assets/Group 54.svg"
import ao from "../../assets/Group 55.svg"
import userIcon from "../../assets/Group 56.svg"
import {useNavigate} from "react-router-dom";

const Subscription = () => {

    const navigate = useNavigate()

    return (
        <div style={{width: 393, display: 'flex', flexDirection: 'column'}}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZD18WqlldmwfcqbOGwHq8Xwa9yYSi4XLRg&s"}
                 style={{width: '100%', height: 304, opacity: 0.5}}/>
            <img src={bicon} style={{position: 'absolute', top: 275, left: 335, width: 50, height: 17, opacity: 0.9}}/>
            <img src={dismoss}
                 onClick={() => {navigate("/search")}}
                 style={{position: 'absolute', top: 37.5, left: 20, width: 24, height: 24, opacity: 0.9}}/>
            <img src={gongu}
                 style={{position: 'absolute', top: 37.5, left: 352, width: 24, height: 24, opacity: 0.9}}/>
            <div style={{width: 330, alignSelf: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column',marginBottom: 20}}>
                <span style={{fontSize: 23, fontWeight: "800", marginTop: 20, marginBottom: 8}}>산속 휴양지</span>
                <span>{`${[
                        { latitude: "33.4648", longitude: "126.5312", name: "빙계 계곡 야영장", seq: "1" },
                        { latitude: "33.3868", longitude: "126.5600", name: "산운마을", seq: "2" },
                    { latitude: "33.3868", longitude: "126.5600", name: "군청", seq: "3" },
                    { latitude: "33.3868", longitude: "126.5600", name: "숙소", seq: "4" }
                    ].map((item) => (`${item.name} ➡`))}`.slice(0, -1)}</span>`
            </div>
            <img src={ao} style={{width: '87%', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}/>
            <img src={userIcon} style={{width: '90%', display: 'flex', justifyContent: 'center', alignSelf: 'center'}}/>
        </div>
    )
}

export default Subscription