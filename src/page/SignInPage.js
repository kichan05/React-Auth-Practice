import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {useState} from "react";
import {signIn, signUp} from "../auth/auth";
import Input from "../component/Input";
import Button from "../component/Button";
import {AUTH_ACTION_TYPE, useAuthDispatch} from "../context/AuthReducer";
import {useNavigate} from "react-router-dom";

const SignInPageStyle = styled.div`
  ${PageBasicStyle};

  .content {
    
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .button-wrap {
    margin-top: 12px;
    text-align: right;
    
    button {
      width: 150px;
    }
  }
`

const SignInPage = () => {
  const authDispatch = useAuthDispatch()
  const navigate = useNavigate()

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  })
  const inputChange = (e) => {
    const {name, value} = e.target
    setInputValues({...inputValues, [name] : value})
  }

  const signUpSubmit = (e) => {
    e.preventDefault()

    const {email, password} = inputValues

    if(email.length === 0 || password.length === 0){
      alert("값을 입력하세요.")
      return
    }

    const result = signIn(email, password)
    authDispatch({type: AUTH_ACTION_TYPE.login, user: result})
    navigate("/")
  }
  return (
    <SignInPageStyle>
      <div className="content">
        <form onSubmit={signUpSubmit}>
          <Input
            onChange={inputChange}
            value={inputValues["email"]}
            placeholder={"이메일"}
            name={"email"}/>
          <Input
            type={"password"}
            onChange={inputChange}
            value={inputValues["password"]}
            placeholder={"비밀번호"}
            name={"password"}/>
          <Button>로그인</Button>
        </form>
      </div>
    </SignInPageStyle>
  )
}

export default SignInPage