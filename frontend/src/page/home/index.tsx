import React from "react";

const Home:React.FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: 393, height: 740, alignItems: 'center'}}>
            <div style={{
                display: 'flex',
                width: 303,
                height: 137,
                marginTop: 48,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: '#DEDEDE',
                borderStyle: 'solid',
            }}>

            </div>
            <text style={{display: "flex", alignSelf: "flex-start", fontSize: 13, fontWeight: "800",marginLeft: 57, marginTop: 35}}>내 예약 보기</text>
            <div style={{
                display: 'flex',
                width: 303,
                height: 358,
                marginTop: 9,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: '#DEDEDE',
                borderStyle: 'solid',
            }}>

            </div>
        </div>
    )
}

export default Home;