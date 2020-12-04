import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

const Background = styled.div`
    margin: 80px;
`

storiesOf('Molecules/Modal', module)
    .add('Modal', () => 
        <Background>
            <Modal 
                header='Error'
                paragraph='An Error accured. We cannot fetch your cart. Try again later...' 
            />
        </Background>
    )