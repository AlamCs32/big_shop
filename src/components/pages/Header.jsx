import { useState } from 'react'
import './header.css'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {
    let navigate = useNavigate()
    let [search, setSearch] = useState("")
    let [token, setToken] = useState(localStorage.getItem("token"))

    let Search = () => {
        if (search) {
            navigate(`/product?search=${search}`)
        }
    }
    let Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logout", { position: toast.POSITION.BOTTOM_CENTER, theme: "dark", autoClose: 1000 })
        setToken("")
    }
    return (
        <>
            <div className="container">
                <nav >
                    <h2 className="logo">
                        Big<span>Shop</span>
                    </h2>
                    <ul>
                        <li className='h6'><Link to="/">Home</Link></li>
                        <li className='h6'><Link to="/cart">Cart</Link></li>
                        {token ?
                            <li className='h6'><Link to="#" onClick={Logout}>Logout</Link></li> :
                            <li className='h6'><Link to="/login">Login</Link><span> </span><Link to="/singup">Singup</Link></li>
                        }
                    </ul>
                    <div className="Form">
                        <input type="search" placeholder="search bar" className="search" onChange={(e) => setSearch(e.target.value)} />
                        <input type="submit" value="Search" className="button" onClick={Search} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header