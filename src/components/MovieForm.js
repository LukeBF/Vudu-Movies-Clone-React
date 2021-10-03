import React from 'react'

const MovieForm = () => {
    return (
        <>
        <section className="hero is-black">
                <div className="hero-body">
                    <p className="title">
                        Create Movie
                    </p>
                </div>
        </section>
        <div className="movie-form-container columns">
            <div className="column">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. Titanic"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Genre</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. Action"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Type</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. Movie/Tv-Show"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Rating</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. PG-13"/>
                    </div>
                </div>
            </div>
            
            <div className="column">
                <div class="field">
                    <label class="label">Rental Price</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. $5.99"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Purchase Price</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. $7.99"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Length</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. 1hr 30mins"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Release</label>
                    <div class="control">
                        <input class="input" placeholder="e.g. 2021"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Poster Image</label>
                    <div class="control">
                        <input class="input" type="file"/>
                    </div>
                </div>
            
                <div class="field">
                    <label class="label">Overview</label>
                    <div class="control">
                        <textarea rows="10"cols="108"/>
                    </div>
                </div>
            
                <button className="button">Save</button>
            </div>
        </div>
            
        </>
    )
}

export default MovieForm
