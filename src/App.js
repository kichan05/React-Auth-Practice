import {GlobalStyle} from "./style/GlobalStyle";
import styled, {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import {Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UiSection from "./section/UiSection";
import React, {useState} from "react";
import {UiContextProvider} from "./context/UiReducer";
import Page from "./page/Page";
import SignUpPage from "./page/SignUpPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <UiContextProvider>
          <Header/>

          <Routes>
            <Route path="/" element={<Page/>}/>
            <Route path="/signUp" element={<SignUpPage/>}/>
          </Routes>

          <Footer/>
          <UiSection/>
        </UiContextProvider>

      </ThemeProvider>
    </div>
  );
}

export default App;
