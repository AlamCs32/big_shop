import React from 'react'

const Singup = () => {
    return (
        <div className='container'>
            <div className='loginForm'>
                <input type="text" name='username' placeholder='Username' />
                <input type="email" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <input type="text" name='address' placeholder='Address' />
                <input type="text" name='phoneNo' placeholder='Email' />
                <input type="file" name='profile' placeholder='Profile Image' />
                <input type="submit" value="Singup" />
            </div>
        </div>
    )
}

export default Singup