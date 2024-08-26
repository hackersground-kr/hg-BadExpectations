import React from 'react';
import {useLocation} from "react-router-dom";
import headerLogo from "../../../assets/headerLogo.svg";
import userIcon from "../../../assets/userIcon.svg";

const HostHeader = () => {
    const location = useLocation();

    const getLinkStyle = (path: string): React.CSSProperties => ({
        textDecoration: 'none',
        color: location.pathname === path ? '#ffa800' : '#333',
        fontWeight: '800',
        fontSize: 15
    });

    return (
        <>
            {location.pathname.includes("host") && (
                <div style={{
                    display: "flex",
                    width: 393,
                    height: 124,
                    flexDirection: "column",
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <div style={{display: "flex", flexDirection: "column", width: 304, height: 78}}>
                        <div style={{display: "flex", flexDirection: "row", width: 130, height: 28, justifyContent: "space-between", alignItems: "flex-end"}}>
                            <img src={headerLogo} alt="Logo" style={{width: 26, height: 28, marginLeft: 5}}/>
                            <span style={{fontSize: 16, fontWeight: '800', color: "#FFA800"}}>의성올래 공방</span>
                        </div>
                        <div style={{width: 1, height: 25}}></div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: "100%",
                            height: 49,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{
                                display: 'flex',
                                gap: '20px',
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: 161,
                                height: 24
                            }}>
                                <a href="/hosthome" style={getLinkStyle("/hosthome")}>
                                    홈
                                </a>
                                <a href="/hostmake" style={getLinkStyle("/hostmake")}>
                                    제작
                                </a>
                                <a href="/hostbook" style={getLinkStyle("/hostbook")}>
                                    신청
                                </a>
                            </div>
                            <a href="/profile">
                                <img src={userIcon} alt="Navigation"
                                     style={{width: 23, height: 23}}/>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HostHeader;