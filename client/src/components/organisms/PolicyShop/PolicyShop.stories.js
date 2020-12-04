import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import PolicyShop from './PolicyShop';

const Background = styled.div`
    margin: 80px;
`

storiesOf('Organisms/Policy Shop', module)
    .add('Normal', () => 
        <Background>
            <PolicyShop />
        </Background>
    )