import React from "react"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Item from "../homePage/style/itemList/Item/Item";
import ItemDetail from "../ItemDetailContainer/ItemDetail/ItemDetail";
import Login from "../Login/login"



const AppRoutes = () => {
    return (
        <Router>
            {/* ======================== Dinamic URL ==================================== */}
                <Routes>
                    <Route path ="/main" element={<Item /> }/>
                    <Route path ="/main/:id" element={<Item/> } />
                    <Route path ="/producto/:id" element={<ItemDetail/> } />
                    <Route path ="/*" element={<Login /> } />
                </Routes>
        </Router>
    )
}
export default AppRoutes