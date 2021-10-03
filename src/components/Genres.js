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
                    <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${ActionBanner}")`}}>
                         <p>Action</p>
                    </div></Link>
                    
                    <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${ComedyBanner}")`}}>
                        <p>Comedy</p>
                    </div></Link>
                    
                    <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${ThrillerBanner}")`}}>
                        <p>Thriller</p>
                    </div></Link>
                    
                    <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${AnimationBanner}")`}}>
                        <p>Animation</p>
                    </div></Link> 

                    <Link to=""><div className="grid genre-item" style={{backgroundImage:`url("${DramaBanner}")`}}>
                        <p>Drama</p>
                    </div></Link> 
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
