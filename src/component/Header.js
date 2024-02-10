import styled from "styled-components";
import {useEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AUTH_ACTION_TYPE, useAuthDispatch, useAuthState} from "../context/AuthReducer";

const HeaderStyle = styled.header`
  width: 100%;
  
  background-color: ${p => p.theme.color.Gray1};
  
  position: fixed;
  top: 0;
  
  & > div {
    width: 100%;
    height: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;

    padding: 20px 16px;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .title {
    color: ${p => p.theme.color.HeechanBlue};
    font-size: 20px;
    font-weight: bold;
  }
`

const Header = () => {
  const headerElement = useRef()
  const authState = useAuthState()
  const authDispatch = useAuthDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const height = headerElement.current.clientHeight
    document.documentElement.style.setProperty("--header-height", `${height}px`)
  })

  const logout = () => {
    authDispatch({type: AUTH_ACTION_TYPE.logout})

    navigate("/")
  }

  return (
    <HeaderStyle ref={headerElement}>
      <div>
        <Link to={"/"}>
          <span className={"title"}>로고</span>
        </Link>

        {
          authState.user == null ?
            <span>
              <Link to={"/signUp"}>회원가입</Link>
              <span> </span>
              <Link to={"/signIn"}>로그인</Link>
            </span> :
            <span onClick={logout}>로그아웃</span>
        }
      </div>
    </HeaderStyle>
  )
}

export default Header