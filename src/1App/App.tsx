import React from 'react';
import cls from "../App.module.scss"
import { AppRouter } from "./Providers/Router";
import { Header } from "../3Widgets/Header";
import { Footer } from "../3Widgets/Footer";


function App() {

  return (
    <div className={cls.App}>
        <Header/>
        <AppRouter/>
        <Footer/>
    </div>
  );
}

export default App;
