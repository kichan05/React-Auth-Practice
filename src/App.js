import {GlobalStyle} from "./style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import {Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UiSection from "./section/UiSection";
import React from "react";
import {UiContextProvider} from "./context/UiReducer";
import Page from "./page/Page";
import SignUpPage from "./page/SignUpPage";
import {Route, Routes} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthReducer";
import SignInPage from "./page/SignInPage";
import {AuthLogin} from "./component/AuthLogin";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <UiContextProvider>
          <AuthContextProvider>
            <AuthLogin/>

            <Header/>
            <Routes>
              <Route path="/" element={<Page/>}/>
              <Route path="/signIn" element={<SignInPage/>}/>
              <Route path="/signUp" element={<SignUpPage/>}/>
            </Routes>
            <Footer/>
            <UiSection/>

          </AuthContextProvider>
        </UiContextProvider>

      </ThemeProvider>
    </div>
  );
}

export default App;
