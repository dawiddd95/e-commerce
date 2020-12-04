import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header from './Header';

const Background = styled.div`
    margin: 80px;
`

storiesOf('Organisms/Header', module)
    .add('Header', () => 
        <Background>
            <Header />
        </Background>
    )