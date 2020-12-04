import React from 'react';
import PropTypes from 'prop-types';
import { Strong } from 'components/atoms/Strong/Strong';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import closeIcon from 'assets/icons/close.svg';
import * as S from './StyledModal';

const Modal = ({header, paragraph, onClickCloseModal}) => {
    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <Strong>{header}</Strong>
                <ButtonIcon icon={closeIcon} onClick={onClickCloseModal} />
            </S.HeaderWrapper>
            <S.StyledParagraph>
                {paragraph}
            </S.StyledParagraph>
        </S.Wrapper>
    );
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    onClickCloseModal: PropTypes.func.isRequired
}
 
export default Modal;