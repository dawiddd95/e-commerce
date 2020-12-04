import React, { useState, useEffect } from 'react';
import { fetchData } from 'helpers/fetchApi';
import { listUsersApi } from 'utils/api';
import cartIcon from 'assets/icons/cart.svg';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Modal from 'components/molecules/Modal/Modal';
import * as S from './StyledMyCart';

const MyCart = () => {
    const [usersCount, setUsersCount] = useState(0);
    const [errors, setErrors] = useState(false);

    const onClickCloseModal = () => {
        setErrors(false);
    }

    useEffect( () => {
        // Tutaj fajniej by było rzucać jakieś API co zwraca samo count, ale w fake API nie mamy takiej możliwości
        // Powinno też być to api produktów, ale na tym etapie to bez znaczenia
        fetchData(listUsersApi, setUsersCount, setErrors);      
    }, [])

    return (  
        <S.Wrapper>
            {
                usersCount > 0 && (
                    <S.CountWrapper>
                        {usersCount}
                    </S.CountWrapper>
                )
            }
            <ButtonIcon icon={cartIcon} />
            <Paragraph>
                My Cart
            </Paragraph>
            {
                errors && (
                    <Modal
                        header='Error'
                        paragraph='An Error accured. We cannot fetch your cart. Try again later...' 
                        onClick={onClickCloseModal} 
                    />
                )
            }
        </S.Wrapper>
    );
}
 
export default MyCart;