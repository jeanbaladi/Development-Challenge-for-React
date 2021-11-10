import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../../navBar/navBar";
// ============== style CSS ======================
import "../Products.css"

const ItemList = () => {
    const [bands, setBands] = useState([])
    // ===============  react hook useParams used ====================
    const {id} = useParams()
    const genreCode = bands.map(items => items.genreCode);
    console.log(genreCode);
    // =================== GET api =============================
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands')
            .then(response => response.json())
            .then((data) => {
                setTimeout(() => {setBands(data)}, 2000)
            })
            .catch(err => console.log(err))
    }, [])
    const idBands = bands.map((id) => {return {"id":id.id}});
    console.log(idBands);
        if(bands.length === 0) {
            return (
                <div className="content-loading">
                    <div className="loading">
                        <div className="bar-firs"></div>
                        <div className="bar-second"></div>
                        <div className="bar-third"></div>
                    </div>
                </div>
            )
        }else if(id) {
            return (
                <>
                <nav>
                    <ul>
                        <li><Link to="/main" >Go back</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    <div className="card-position-detail">
                    {bands.filter(item => item.genreCode === id).map((items) => {
                        return (
                            <div className="container-card-detail">
                                <div className="card card-detail">
                                    <ul>
                                        <li>{items.name}</li>
                                        <li>{items.year}</li>
                                        <li>{items.country}</li>
                                        <li className="members">members:{items.members.map((item) => {
                                            return (
                                                <li>{item.name}</li>
                                                )
                                        })}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                </>
            )
        }
        else {
            return(
                <>
                <NavBar />
                <div className="container">
                    <div className="card-position">
                        {bands.map(item => {
                            return (
                                <Link to={`/producto/${item.id}`}>
                                    <div className="container-card">
                                        <div className="card">
                                            <p key={item.id}>{item.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                </>
            )
        }
}
export default ItemList