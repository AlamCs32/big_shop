import React, { useEffect, useState } from 'react'
import Header from '../pages/Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toastError, toastSuccess } from '../../Toast'
import { CardThunk } from '../../slice/cardSlice'
import { ProductImageUrl, STATUS } from '../../slice/constant'
import { productThunk } from '../../slice/productSlice'
import './product.css'
import Loading from '../Loading/Loading'
import Pagination from '../pagination/Pagination'


const Product = () => {

    const dispatch = useDispatch()
    let { data: Product, status, error } = useSelector(state => state.Product)
    let Card = useSelector(state => state.Card)
    let [params, setParams] = useState({ page: 1 })
    console.log(Card)

    let navigate = useNavigate()

    useEffect(() => {
        dispatch(productThunk(params))
    }, [dispatch])

    let addToCard = (id) => {
        let token = window.localStorage.getItem("token")
        if (!token) {
            toastError("pls Login")
            navigate('/login')
        }
        let state = { id, quantity: 1, token }
        dispatch(CardThunk(state))
        toastSuccess("Added")
    }

    // Loading Component
    if (status === STATUS.LOADING) return <div><Loading type={"spin"} color={"yellow"} /></div>
    // Error Component
    if (error) return "ERror";

    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-center mt-50 mb-50">

                <div className="row">
                    {/* Map Function Start*/}
                    {Product.success === true && Product.product.rows ? Product.product.rows.map((i, index) => (

                        <div className="col-md-10" key={index}>

                            <div className="card card-body mt-3">
                                <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                    <div className="mr-2 mb-3 mb-lg-0">
                                        <img src={ProductImageUrl + i.thumbnail} width="150" height="150" alt="" />
                                    </div>

                                    <div className="media-body">
                                        <h6 className="media-title font-weight-semibold">
                                            <a href="#" data-abc="true">{i.title}</a>
                                        </h6>

                                        <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                                            {i.category.map((i, index) => (
                                                <li className="list-inline-item" key={index}><a href="#" className="text-muted" data-abc="true">{i}</a></li>
                                            ))}
                                        </ul>

                                        <p className="mb-3">{i.description} </p>

                                        <ul className="list-inline list-inline-dotted mb-0">
                                            <li className="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                                        </ul>
                                    </div>

                                    <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                                        <h3 className="mb-0 font-weight-semibold">{i.ammount}</h3>

                                        <div>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>

                                        </div>

                                        <div className="text-muted">2349 reviews</div>

                                        <button type="button" className="btn btn-warning mt-4 text-white" onClick={() => addToCard(i.id)}><i className="icon-cart-add mr-2" ></i> Add to cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                        : "Something Went Wronge"}
                    {/* Map Function End*/}
                </div>
            </div>
            {/* pagination Start*/}
            <Pagination count={Product.product.count}></Pagination>
            {/* pagination End*/}
        </div>
    )
}

export default Product