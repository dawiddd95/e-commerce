import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import viewIcon from 'assets/icons/view.svg';
import PolicyShopItem from './PolicyShopItem';

const Background = styled.div`
    margin: 80px;
`

storiesOf('Molecules/Policy Shop Item', module)
    .add('Normal', () => 
        <Background>
            <PolicyShopItem 
                icon={viewIcon}
                title='FREE DELIVERY'
                text='From $59'
            />
        </Background>
    )