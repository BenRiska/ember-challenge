import React from 'react'
import Nav from "./Nav"

const  Layout:React.FC = ({children}) => {
    return (
        <div className="layout">
            <Nav/>
            {children}
        </div>
    )
}

export default Layout
