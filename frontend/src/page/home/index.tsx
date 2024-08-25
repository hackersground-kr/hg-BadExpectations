import React, {useEffect} from "react";

import makerImg from "../../assets/customMaker.svg"

declare global {
    interface Window {
        kakao: any;
    }
}


const Home = () => {

    const markAdd = (N : number, E : number, isStartRoute : boolean, map : any) => {
        const imageSrcStart = makerImg,
            imageSizeStart = new window.kakao.maps.Size(33, 33),
            imageOptionStart = {offset: new window.kakao.maps.Point(27, 69)};
        const imageSrc = makerImg,
            imageSize = new window.kakao.maps.Size(29, 29),
            imageOption = {offset: new window.kakao.maps.Point(27, 69)};
        const markerImageStart = new window.kakao.maps.MarkerImage(imageSrcStart, imageSizeStart, imageOptionStart);
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        let markerPosition = new window.kakao.maps.LatLng(N, E);
        if(isStartRoute) {
            let marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImageStart,
            });
            marker.setMap(map);
        } else {
            let marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage
            });
            marker.setMap(map);
        }
    }

    useEffect(() => {
        let container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
        let options = {
            center: new window.kakao.maps.LatLng(36.3527164442425, 128.607077816076), // 지도 중심 좌표
            level: 10, // 지도의 레벨(확대, 축소 정도)
        };

        let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        markAdd(36.42,128.60,true,map);
        markAdd(36.50,128.30,true,map);

    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: 393, height: 999, alignItems: 'center' }}>
            <div style={{
                display: 'flex',
                width: 330,
                height: 137,
                marginTop: 48,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: '#DEDEDE',
                borderStyle: 'solid',
            }}>
            </div>
            <span style={{ display: "flex", alignSelf: "flex-start", fontSize: 13, fontWeight: "800", marginLeft: 57, marginTop: 35 }}>내 예약 보기</span>
            <div id={"map"} style={{ width: 330, height: 345, borderRadius: 8, backgroundColor: '#DEDEDE', margin: 19 }} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 330,
                height: 174,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: "#DEDEDE",
                borderStyle: "solid",
                marginTop: 30,
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    width: 294,
                    height: 65,
                    borderBottomWidth: 1,
                    borderColor: "#DEDEDE",
                    borderBottomStyle: "solid",
                    flexDirection: "row",
                }}>
                    <div style={{display: 'flex', width: 115, height: 65, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{fontSize: 12, fontWeight: '700'}}>여행까지 {3}일</span>
                        <span style={{fontSize: 11, fontWeight: '500', color: "#BEBDBD"}}>{`${2024}. 0${9}. ${12}.`}</span>
                    </div>
                    <div style={{width: 152, height: 12, borderRadius: 8, backgroundColor: '#F1F1F1', margin: 19, overflow: 'hidden'}}>
                        <div style={{width: 40, height: 12, borderRadius: 8, backgroundColor: '#FFA800'}}/>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: 294,
                    height: 54,
                    borderBottomWidth: 1,
                    borderColor: "#DEDEDE",
                    borderBottomStyle: "solid",
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}>
                    <div style={{
                        display: 'flex',
                        width: 59,
                        height: 54,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginLeft: 22
                    }}>
                        <span style={{fontSize: 12, fontWeight: '700'}}>가이드 정보</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: 156,
                        height: 54,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginLeft: 22,
                    }}>
                        <span style={{fontSize: 12, fontWeight: "600", color: "#BEBDBD"}}>{"이해준"}</span>
                        <span style={{fontSize: 12, fontWeight: "900", color: "#FFA800", marginLeft: 4}}>{"〉"}</span>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: 294,
                    height: 54,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}>
                    <div style={{
                        display: 'flex',
                        width: 50,
                        height: 54,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginLeft: 22
                    }}>
                        <span style={{fontSize: 12, fontWeight: '700'}}>집결 장소</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: 165,
                        height: 54,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginLeft: 22,
                    }}>
                        <span style={{fontSize: 12, fontWeight: "600", color: "#BEBDBD"}}>{"구지면 대구소프트웨어고"}</span>
                        <span style={{fontSize: 12, fontWeight: "900", color: "#FFA800", marginLeft: 4}}>{"〉"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
