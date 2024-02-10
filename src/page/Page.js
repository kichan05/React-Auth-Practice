import styled from "styled-components";
import {useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useEffect, useState} from "react";
import {getUsers} from "../auth/auth"
import Input from "../component/Input";

const PageStyle = styled.div`
  ${PageBasicStyle};
  
  .content {
    
  }
  
  table {
    width: 100%;
    
    font-size: 16px;
  }
  
  table th, table td {
    padding: 12px 8px;
  }
  
  table thead tr {
    color: ${p => p.theme.color.Gray2};
    background-color: ${p => p.theme.color.Gray9};
  }
`

const Page = () => {
  const uiState = useUiState()
  const uiDispatch = useUiDispatch()

  const [userList, setUserList] = useState([])

  useEffect(() => {
    setUserList(getUsers())
  }, [])

  return (
    <PageStyle>
      <div className="content">
        <table border={1}>
          <thead>
            <tr>
              <th style={{width:"5%"}}>ID</th>
              <th style={{width:"75%"}}>EMAIL</th>
              <th style={{width:"20%"}}>PASSWORD</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </PageStyle>
  )
}

export default Page