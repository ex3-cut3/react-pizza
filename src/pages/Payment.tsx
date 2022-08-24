import React from 'react';

const Payment = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
            <h2 style={{textAlign: 'center', padding: '5px 10px'}}>In honour of the greatest actor and the man of all times, Billy Herrington</h2>
            <img style = {{width: '75%', height: 'auto'}} src = {'img/billy-tribute.gif'} alt = 'Billy Herrington Tribute' />

            <div>
                Made with love, by <a className='creator__name' target='_blank' rel='noreferrer' href='https://t.me/billyherrin'>ex3-cut3</a> 💗
            </div>
        </div>
    );
};

export default Payment;
