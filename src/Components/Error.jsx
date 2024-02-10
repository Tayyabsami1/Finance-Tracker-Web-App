import '../Css/Error.css';

import React from 'react'
import { Link } from 'react-router-dom';

const Error = ({check}) => {
  return (
    <>
    <section id="error-page">
        <div className="content container">
            <h2 className="header">
                404
            </h2>
            <h4>Sorry! This Page doesnot exist</h4>
            <p>
                Ooops! it seems like the page you are trying to access                 doesn't exist. If you believe there's an issue , feel free to report it , and we will look into it.
            </p>
            <div className="btns">
                <Link to='/'>Return Home</Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default Error
