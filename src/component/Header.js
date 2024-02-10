import styled from "styled-components";
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

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
    font-size: 28px;
    font-weight: bold;
  }
`

const Header = () => {
  const headerElement = useRef()
  useEffect(() => {
    const height = headerElement.current.clientHeight
    document.documentElement.style.setProperty("--header-height", `${height}px`)
  })

  return (
    <HeaderStyle ref={headerElement}>
      <div>
        <Link to={"/"}>
          <span className={"title"}>헤더</span>
        </Link>

        <Link to={"/signUp"}>회원가입</Link>
      </div>
    </HeaderStyle>
  )
}

export default Header