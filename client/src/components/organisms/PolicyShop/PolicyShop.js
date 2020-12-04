import cartIcon from 'assets/icons/cart.svg';
import compareIcon from 'assets/icons/compare.svg';
import loveIcon from 'assets/icons/love.svg';
import searchIcon from 'assets/icons/search.svg';
import viewIcon from 'assets/icons/view.svg';
import React from 'react';
import PolicyShopItem from '../../molecules/PolicyShopItem/PolicyShopItem';

import * as S from './StyledPolicyShop';

const PolicyShop = () => {
    return ( 
        <S.Wrapper>
            <PolicyShopItem
                icon={cartIcon}
                title='FREE DELIVERY'
                text='From $59'
            />
            <PolicyShopItem
                icon={compareIcon}
                title='SUPPORT 24/7'
                text='Online 24 hours'
                background='#2CC97A'
            />
            <PolicyShopItem
                icon={loveIcon}
                title='FREE RETURN'
                text='365 a day'
                background='#FDBD27'
            />
            <PolicyShopItem
                icon={searchIcon}
                title='PAYMENT METHOD'
                text='Secure payment'
                background='#FF5757'
            />
            <PolicyShopItem
                icon={viewIcon}
                title='GET PROMOTION'
                text='Secure payment'
                background='#B487DA'
            />
        </S.Wrapper>
    );
}
 
export default PolicyShop;
