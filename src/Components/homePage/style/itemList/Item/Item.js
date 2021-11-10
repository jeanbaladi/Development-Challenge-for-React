import React from "react";
import Footer from "../../../../footer/footer";
import ItemList from "../ItemList";


const Item = () => {
    return (
        <>
            {!localStorage.user ? window.location.assign("/") : <ItemList/>}
            <Footer/>
        </>
    )
}
export default Item