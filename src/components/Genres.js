import React from 'react'
import {Link} from 'react-router-dom'

import ActionBanner from '../assets/img/background/genre-action.jpg'
import AnimationBanner from '../assets/img/background/genre-animation.jpg'
import ComedyBanner from '../assets/img/background/genre-comedy-2.jpg'
import ThrillerBanner from '../assets/img/background/genre-thriller.jpg'
import DramaBanner from '../assets/img/background/genre-drama.jpg'

const Genres = () => {
    return (
        <div>
            <div className="row-container">
                <h2>Genres</h2>
                <div className="genre-items grid grid-col-5 grid-column-gap">
                    {/* <div className="genre-container">
                        <Link to="" className="overlay">
                            <div className="grid genre-item" style={{backgroundImage:`url("${ActionBanner}")`}}>
                                <p>Action</p>
                            </div>
                        </Link>
                    </div> */}
                    <div className="genre-container">
                        <Link to="" className="overlay">
                            <div className="grid genre-item" style={{backgroundImage:`url("${ActionBanner}")`}}>
                                <p style={{fontSize:"2rem"}}>Action</p>
                            </div>
                        </Link>
                        <div className="color-overlay"></div>
                    </div>

                    <div className="genre-container">
                        <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${ComedyBanner}")`}}>
                            <p style={{fontSize:"2rem"}}>Comedy</p>
                        </div></Link>
                    </div>

                    <div className="genre-container">
                        <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${ThrillerBanner}")`}}>
                            <p style={{fontSize:"2rem"}}>Thriller</p>
                        </div></Link>
                    </div>

                    <div className="genre-container">
                        <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${AnimationBanner}")`}}>
                            <p style={{fontSize:"2rem"}}>Animation</p>
                        </div></Link> 
                    </div>

                    <div className="genre-container">
                        <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${DramaBanner}")`}}>
                            <p style={{fontSize:"2rem"}}>Drama</p>
                        </div></Link> 
                    </div>
                </div>
            </div>
        </div>
        // <>
        //     <div className="grid genre-item">
        //         <p>Action</p>
        //     </div>
        //     <div className="grid genre-item">
        //         <p>Comedy</p>
        //     </div>
        //     <div className="grid genre-item">
        //         <p>Thriller</p>
        //     </div>
        //     <div className="grid genre-item">
        //         <p>Animation</p>
        //     </div>   
        // </>
        // <>
        //     <div className="row-container">
        //         <h2>Genres</h2>
        //         <div className="genre-items grid grid-col-4 grid-column-gap-2">
        //             <div className="grid genre-item">
        //                 <p>Action</p>
        //             </div>
        //             <div className="grid genre-item">
        //                 <p>Comedy</p>
        //             </div>
        //             <div className="grid genre-item">
        //                 <p>Thriller</p>
        //             </div>
        //             <div className="grid genre-item">
        //                 <p>Animation</p>
        //             </div>
        //         </div>
                
        //     </div>
        // </>
        
    )
}

export default Genres
