import React from 'react'

const AdminHeader = ({heading}) => {
    return (
        <div>
            <section className="hero is-black">
                <div className="hero-body">
                    <p className="title">
                        {heading}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AdminHeader
