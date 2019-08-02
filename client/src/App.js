import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import { ToastProvider } from "./components/ToastManager";
import configureStore from "./store";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import theme from "./themes/purple";
import Footer from "./components/Footer/Footer";

const App = () => {
    
    const reduxStore = configureStore();

    return(
        <ReduxProvider store={reduxStore}>
            <ThemeProvider theme={theme}>
                <ToastProvider>
                    <Header/>
                    <Body/>
                    <Footer/>
                </ToastProvider>
            </ThemeProvider>
        </ReduxProvider>
    )
  }

export default App;