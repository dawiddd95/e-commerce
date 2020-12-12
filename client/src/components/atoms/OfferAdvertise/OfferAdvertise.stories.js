import React from 'react';
import { storiesOf } from '@storybook/react';
import item1 from 'assets/img/item-1.png';
import item2 from 'assets/img/item-2.png';
import { OfferAdvertise } from './OfferAdvertise';

storiesOf('Atoms/Offer Advertise', module)
    .add('Item1', () => 
        <OfferAdvertise src={item1} />
    )
    .add('Item2', () => 
        <OfferAdvertise src={item2} />
    )
    .add('Half width', () => 
        <OfferAdvertise src={item2} width='50%' />
    )