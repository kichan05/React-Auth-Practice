import React, {useContext, useReducer} from "react";

export const AUTH_ACTION_TYPE = {
  login : "LOGIN",
  logout: "LOGIUT"
}

const authState = {
  user: null
}

function reducer(state, action) {
  switch (action.type) {
    case AUTH_ACTION_TYPE.login:
      return {
        ...state, user: action.user
      }
    case AUTH_ACTION_TYPE.logout:
      return {
        ...state, user: null
      }
  }
}

const AuthState = React.createContext(null)
const AuthDispatch = React.createContext(null)

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, authState)

  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>
        {children}
      </AuthDispatch.Provider>
    </AuthState.Provider>
  )
}

export function useAuthState() {
  const context = useContext(AuthState)
  return context
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatch)
  return context
}
