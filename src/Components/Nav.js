import React from 'react'

function Nav() {
    return (
        <div>
            <nav>
                <div className="nav-logo"><i class="fal fa-pizza-slice"></i></div>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About us</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
