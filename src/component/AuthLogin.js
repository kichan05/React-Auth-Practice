import {AUTH_ACTION_TYPE, useAuthDispatch} from "../context/AuthReducer";
import React, {useEffect} from "react";
import {getUserData} from "../auth/auth";

export const AuthLogin = () => {
  const authDispatch = useAuthDispatch()

  useEffect(() => {
    // const token = localStorage.getItem("jwtToken")
    const token = "aaa"
    if (token === null)
      return

    try{
      const userData = getUserData(token)
      authDispatch({type: AUTH_ACTION_TYPE.login, user: userData})
    }
    catch (e) {
      console.log(e)
    }

  }, [])

  return <div></div>
}