import React from 'react'
import "./SideNav.css"
import { Link, useLocation } from "react-router-dom"

function SideNav() {

    const slug = useLocation();

    return (
        <div className="SideNav">
            <Link to="/habits" className={`SideNav-list-items ${slug.pathname === "/habits" && "SideNav-list-items--active"}`}>Habit</Link>
            <Link to="/accomplishments" className={`SideNav-list-items ${slug.pathname === "/accomplishments" && "SideNav-list-items--active"}`}>Accomplishments</Link>
            <Link to="/elements" className={`SideNav-list-items ${slug.pathname === "/elements" && "SideNav-list-items--active"}`}>Elements</Link>
        </div>
    )
}

export default SideNav
