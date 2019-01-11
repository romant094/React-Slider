import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

function App() {
    return (
        <div>
            <Hello name='Anton' surname='Romankov' link='http://vk.com' />
        </div>
    );
}

function Hello({ name, surname, link }) {
    return (
        <div>
            <div>
                <h1>{name} {surname}!</h1>
                <a href={link}>VK profile</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi provident impedit nulla excepturi rerum, nam numquam ex quis id error?</p>
            </div>
        </div>
    )
}

export default App;