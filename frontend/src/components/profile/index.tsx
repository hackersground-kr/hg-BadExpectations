import React, {useState} from 'react';
import * as S from "./style";
import headerLogo from "../../assets/headerLogo.svg";
import userIcon from "../../assets/userIcon.svg";
import {useLocation} from "react-router-dom";
import LogoutModal from '../logoutmodal';

const Profile =()=>{
    const [modal, setModal]=useState(false);
return(
<>
    <S.main>
    {modal ? <LogoutModal setModal={setModal} />: null}
                <header style={{
                    display: "flex",
                    width: 393,
                    height: 124,
                    flexDirection: "column",
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <div style={{display: "flex", flexDirection: "column", width: 304, height: 78}}>
                        <div style={{display: "flex", flexDirection: "row", width: 98, height: 28, justifyContent: "space-between", alignItems: "flex-end"}}>
                            <img src={headerLogo} alt="Logo" style={{width: 26, height: 28, marginLeft: 5}}/>
                            <text style={{fontSize: 16, fontWeight: '800', color: "#FFA800"}}>의성올래</text>
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
                                <span style={{
                                    textDecoration: 'none',
                                    color: '#333',
                                    fontWeight: '800',
                                    fontSize: 15
                                }}>
                                    프로필
                                </span>
                                
                              
                            </div>
                            
                        </div>
                    </div>
                </header>
                    
            <S.mainProfile>
                <S.profileView>
                        <S.profileUser>
                            <img src={userIcon} alt="img" />
                            <S.profileName>
                                <div>
                                <p>이해준</p>
                                <p>방문객</p>
                                </div>
                            </S.profileName>
                        </S.profileUser>
                </S.profileView>
            
                <S.logoutButton onClick={()=>setModal(true)}>로그아웃</S.logoutButton>
            </S.mainProfile>
            

    </S.main>
    </>
)
}
export default Profile;