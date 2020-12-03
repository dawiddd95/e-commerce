import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import AccountMenu from './AccountMenu';

const Background = styled.div`
    margin: 80px;
`


storiesOf('Molecules/AccountMenu', module)
    .add('Normal', () => 
        <Background>
            <AccountMenu />
        </Background>
    )