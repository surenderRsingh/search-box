import React from 'react';
import BootStrapContainer from 'react-bootstrap/Container';

const Container = props => (
    <BootStrapContainer className='my-5'>
        {props.children}
    </BootStrapContainer>
)

export default Container;