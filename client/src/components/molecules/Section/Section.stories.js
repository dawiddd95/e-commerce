import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { productsApi } from 'utils/api';
import { OfferAdvertise } from 'components/atoms/OfferAdvertise/OfferAdvertise';
import item1 from 'assets/img/item-1.png';
import item2 from 'assets/img/item-2.png';
import Section from './Section';

const Grid = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const SectionChildrenWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`


storiesOf('Molecules/Section', module)
    .add('Basic', () => 
        <Grid>
            <Section api={productsApi} />
        </Grid>
    )
    .add('With Advertise', () =>
        <Grid>
            <Section api={productsApi}>
                <SectionChildrenWrapper>
                    {/* To jest children */}
                    <OfferAdvertise src={item1} width='50%' />
                    <OfferAdvertise src={item2} width='50%' />
                </SectionChildrenWrapper>
            </Section>
        </Grid>
    )