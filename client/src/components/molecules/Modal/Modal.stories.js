import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Subscribe from 'components/molecules/Subscribe/Subscribe';
import Modal from './Modal';

const Background = styled.div`
    margin: 80px;
`

// Wrappery dla childrena mogą być różne, dlatego nie zdefiniujemy go w ciele <Modal> </Modal>, 
// ponieważ wtedy każde renderowanie Modal dało by Wrapperowi childrena te same style, a my chcemy różne
const Wrapper = styled.div`
    padding: 0 20px 40px 20px;
` 

storiesOf('Molecules/Modal', module)
    .add('Basic', () => 
        <Background>
            <Modal 
                header='Error'
                paragraph='An Error accured. We cannot fetch your cart. Try again later...' 
            />
        </Background>
    )
    .add('Newsletter', () => 
        <Background>
            <Modal 
                header='Get Our Newsletter'
                paragraph='Subscribe To The Mailing List To Receive Updates On New Arrivals, Special Offers And Other Discount Information' 
            >
                <Wrapper>
                    <Subscribe />
                </Wrapper>
            </Modal>
        </Background>
    )