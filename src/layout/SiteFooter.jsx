import React from 'react'

const SiteFooter = () => {
    const date =  new Date();
     let c_year = date.getUTCFullYear();
    return (
        <footer>
            <p className='text-center p-2'>Copyright © All right Reserved {c_year}</p>
        </footer>
    )
}

export default SiteFooter;