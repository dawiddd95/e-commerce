import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import MyCart from './MyCart';

const Background = styled.div`
    margin: 80px;
`

storiesOf('Molecules/MyCart', module)
    .add('My Cart', () => 
        <Background>
            <MyCart />
        </Background>
    )