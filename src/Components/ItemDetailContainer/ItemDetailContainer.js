import React, {useState, useEffect} from "react";
import {useParams} from "react-router"
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import NavBar from "../navBar/navBar";
import GoBack from "../GoBack/GoBack"
// ================= style CSS =======================
import "./style/ItemDetail.css"

const ItemDetailContainer = () => {
    const [bandsDetail, setBandsDetail] = useState([])
    const [bands, setBands] = useState([])
    // ========== use hook useParams ====================
    const {id} = useParams()
    // =========== Convert string to numbers ==============
    const idNumber = parseInt(id)
    // ===================== GET api ============================================
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/improvein/dev-challenge/albums')
            .then(response => response.json())
            .then((data) => {
                setTimeout(() => {setBandsDetail(data)}, 500)
            })
            .catch(err => console.log(err))
    }, [])
    // ===================== GET api ============================================
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands')
            .then(response => response.json())
            .then((data) => {
                setTimeout(() => {setBands(data)}, 500)
            })
            .catch(err => console.log(err))
    }, [])
    
    if((bands.length === 0) || (bandsDetail.length === 0)){
        return (
            <>
            <div className="content-loading">
                <div className="loading">
                    <div className="bar-firs"></div>
                    <div className="bar-second"></div>
                    <div className="bar-third"></div>
                </div>
            </div>
            <Footer/>
            </>
            
        )
    }
    return (
        <>
        <NavBar/>
        <GoBack />
        <div className="container">
            <div className="card-detail-special">
                <div className="card-title">
                    {bands.filter(item => item.id === idNumber).map((items) => {
                        return (
                            <>
                            <h3>{items.name}</h3>
                            <h4>country:</h4>
                            <p>{items.country}</p>
                            <h4>Genre</h4>
                            <p>{items.genreCode}</p>
                            <h4>Year</h4>
                            <p>{items.year}</p>
                            <h4>members</h4>
                            <ul>
                                {items.members.map((item) => {
                                    return (
                                        <li>{item.name}</li>
                                        )
                                })}
                            </ul>
                            </>
                        )
                    })}
                </div>
                <div className="card-text">
                    {bandsDetail.filter(item => item.bandId === idNumber).map((items) => {
                        return (
                            <>
                            <h3>album:</h3>
                            <p>{items.name}</p>
                            <h4>Year:</h4>
                            <p>{items.year}</p>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default ItemDetailContainer