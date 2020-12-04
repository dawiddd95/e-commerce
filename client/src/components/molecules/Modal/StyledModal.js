import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
    border-radius: 4px;
    box-shadow: 0 7px 7px 7px rgba(0,0,0,0.2);
`

export const HeaderWrapper = styled.header`
    padding: 20px;
    border-bottom: ${ ({theme}) => `1px solid ${theme.color.silver}`};

    display: flex;
    justify-content: space-between;
`

export const StyledParagraph = styled(Paragraph)`
    padding: 20px;
`