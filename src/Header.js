import React from 'react';

const Header = (props) => {
    
    return (
        <>
        <section className='header-sec'>
            <div className="container header-con">
                 <h2 className='text-center'>{props.title}</h2>
                 <h6 className='text-center'>{props.descp}</h6>
            </div>
        </section>
        </>
    );
}

export default Header;

