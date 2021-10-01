import React from 'react'
import {Link} from 'react-router-dom'

const Genres = () => {
    return (
        <div>
            <div className="row-container">
                <h2>Genres</h2>
                <div className="genre-items grid grid-col-5 grid-column-gap">
                    <Link to=""><div className="grid genre-item">
                         <p>Action</p>
                    </div></Link>
                    
                    <Link to=""><div className="grid genre-item">
                        <p>Comedy</p>
                    </div></Link>
                    
                    <Link to=""><div className="grid genre-item">
                        <p>Thriller</p>
                    </div></Link>
                    
                    <Link to=""><div className="grid genre-item">
                        <p>Animation</p>
                    </div></Link> 

                    <Link to=""><div className="grid genre-item">
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
