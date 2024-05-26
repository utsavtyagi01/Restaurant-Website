
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);



    const [modal, setModal] = useState(false);
    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")

    }
    const toggleModal = () => {
        setModal(!modal);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const emailInput = event.target.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();


        if (!emailValue) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'Once submitted, you will not be able to change your details!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Successfully Subscribed!',
                    'Enjoy Your Subscription',
                    'success'
                );
                toggleModal();
            }
        });
    };


    return (
        <>
            <nav >
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div id="logo">
                        <Link to="/" className='navbar-brand'><h1  class="major-mono-display-regular">SAVOR HAVEN</h1></Link>
                    </div>
                </label>
                <ul>
                    <li><NavLink activeclassname="active" to="/" onClick={handleMenuItemClick}>HOME</NavLink></li>
                    <li><NavLink to="/about" onClick={handleMenuItemClick}>ABOUT</NavLink></li>
                    <li><NavLink to="/services" onClick={handleMenuItemClick}>SERVICES</NavLink></li>
                    <li><NavLink to="/pricing" onClick={handleMenuItemClick}>PRICING</NavLink></li>
                    <li><NavLink to="/team" onClick={handleMenuItemClick}>TEAM</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleMenuItemClick}>CONTACT</NavLink></li>
                    <li >  <button onClick={toggleModal} className='btn btn-signup show' >SIGN UP</button></li>
                </ul>
                <div className='btn-main hide'>
                    <button onClick={toggleModal} className='btn btn-signup hide'>SignUp</button></div>
            </nav>


            {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>SAVOR HAVEN</h2>
                        <p className='p-l-1'>Book Now</p>
                        <p>
                            Subscription is FREE, Subscribed & Get 20% OFF on Your First Meal.
                        </p>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='inp'
                                type='email'
                                required
                                placeholder='Enter Your Email Address'
                            />

                            <span>
                                <p > <input id='same' type='checkbox' required className='in' />
                                    <label htmlFor='same'>  Accept Terms & Conditions</label>
                                </p>
                            </span>
                            <button className='btn-pr' type='submit'>Subscribe</button>
                        </form>
                        <button className='close-modal' onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default Navbar;
