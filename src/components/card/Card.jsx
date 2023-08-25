import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="container d-flex justify-content-center mt-80 mb-50" style={{ marginTop: "10px" }}>

            <div className="row">

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png"
                                className="card-img img-fluid" width="96" height="350" alt="" />
                        </div>
                        <div className="product-details">
                            <div className="product-title"><a href="#" className="text-default mb-1" data-abc="true">Toshiba
                                Notebook with 500GB HDD & 8GB RAM</a></div>
                            <div className="product-price">$99.99</div>
                            <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                euismod ante id urna efficitur, nec vulputate mi hendrerit.</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card