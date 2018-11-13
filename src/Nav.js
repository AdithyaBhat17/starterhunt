import React from 'react'

export default function Nav(props) {
    const { search } = props
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#S">StarterHunt</a>
                </div>
                <form className="navbar-form navbar-left">
                    <div className="form-group">
                        <input
                         type="text" 
                         className="form-control" 
                         placeholder="Search for projects" 
                         onChange={(event) => search(event)}
                        />
                    </div>
                </form>
            </div>
        </nav>
    )
}