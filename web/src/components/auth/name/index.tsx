import React from "react"
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";
import * as S from "./style";
import * as Auth from "../start/style";
import { useAtom } from "jotai";
import { authType } from "../../../store/authtype/authtype.atom";
import { useNavigate } from "react-router-dom";


const Name = ()=>{
    const navigate = useNavigate();
    const [AuthValid, setAuthValid] = useAtom(authType);
    const consumerAuth = ()=>{
        setAuthValid((prev)=>!prev);
        
            navigate("/login")
        
    }
return(
    <S.login>
    <Auth.main>
        <Auth.loginText>
                    <h2>안녕하세요</h2>
                </Auth.loginText>
                <S.buttonMain>
                <S.textFieldWrap>
                        <S.textField placeholder="이름을 입력해주세요" />
                    </S.textFieldWrap>
                    <S.bottomWarp>
                    <S.startButton onClick={()=>navigate("/signup")}>다음</S.startButton>
                    <S.navText>
                        <span onClick={()=>navigate("/sign")}>로그인 하러 가기</span>
                    </S.navText>
                    </S.bottomWarp>
                </S.buttonMain>
                
                <img src={Polygon}></img>
            </Auth.main>
            <Auth.logoMain>
                <Auth.logo src={logo}>

                </Auth.logo>
            </Auth.logoMain>
    </S.login>
)
}
export default Name