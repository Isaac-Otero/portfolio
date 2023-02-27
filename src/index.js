//reaches into the react directory 
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import App from './components/App';
import Jokes from "./components/Jokes";
import MusicMaster from './projects/music-master';
import Reaction from "./projects/reaction";
import EvensOrOdds from "./projects/even-or-odds";
import './index.css';
import Reaction from "./projects/reaction";


//find div with id root
const root = ReactDOM.createRoot(document.getElementById('root'));
//react element is like a div element,smallest kind of react element/
//self enclosing jsx tag
root.render(
    <BrowserRouter history={createBrowserHistory()}>
        <Routes>
            <Route path='/' element={<Header> <App /></Header>}/>
            <Route path="/jokes" element={<Header > <Jokes /></Header>} />
            <Route path="/music-master" element={<Header > <MusicMaster /></Header>} />
            <Route path="/evens-or-odds" element={<Header > <EvensOrOdds /></Header>} />
            <Route path="/reaction" element={<Header > <Reaction /></Header>} />
        </Routes>
    </BrowserRouter>
);

