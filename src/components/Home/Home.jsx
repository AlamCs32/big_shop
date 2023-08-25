import React from 'react'
import { toast } from 'react-toastify'
import Template from '../template/Template'
import Header from '../pages/Header'
import Card from '../card/Card'
import Footer from '../pages/Footer'

function Home() {
    // toast.success("Wow Is Awesome", { position: toast.POSITION.BOTTOM_CENTER, theme: "dark", autoClose: 1000 })

    return (
        <>
            {/* Header Sections */}
            <Header />
            {/* Header Sections End*/}
            {/* Template Carousel */}
            < Template />
            {/* Template Carousel End*/}

            <h3 className='bg-dark' style={{ color: "white", textAlign: "center", fontFamily: "cursive", margin: "10px 0 10px 0", }}>Products</h3>
            {/* Card Components */}
            <Card />
            {/* Card Components End*/}
            {/* footer */}
            <Footer />
            {/* footer End*/}
        </>
    )
}

export default Home