import React from 'react';

function MainImage(props) {
    const gradient = "linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%)";

    return(
    <div style={{ 
        backgroundImage: `${gradient}, url('${props.image}')`,
        backgroundColor: '#1c1c1c',
        height: '500px',
        backgroundSize: '100%, cover',
        backgroundPosition: 'center, top',
        width: '100%',
        position: 'relative'
    }}>
        <div>
            <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <h2 style={{ color: 'white' }}> {props.title} </h2>
                <p style={{ color: 'white', fontSize: '1rem'}}> {props.text} </p>

            </div>
        </div>
</div>        
    )
}


export default MainImage