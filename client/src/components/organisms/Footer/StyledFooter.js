import { Strong } from 'components/atoms/Strong/Strong';
import { StyledLink } from 'components/atoms/Link/Link';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: 400px;
`

export const ConstactWrapper = styled.div`
    width: 35%;
    padding: 60px 20px 60px 40px;
    background-color: ${ ({theme}) => theme.background.footerDark};
`

export const InnerWrapper = styled.div`
    width: 70%;
    height: 100%;
    padding: 60px 20px 60px 40px;
    background-color: ${ ({theme}) => theme.background.footerLight};
    display: flex;
`

export const ColumnWrapper = styled.div`
    height: 100%;
    margin: 0 40px 0 0;
    display: flex;
    flex-direction: column;
`

export const SubscribeWrapper = styled.div`
    width: 40%;
    margin: 280px 0 0 22%;
    position: absolute;
`

export const StyledStrong = styled(Strong)`
    line-height: 50px;
    border-bottom: ${ ({theme}) => `2px dotted ${theme.background.primary}`};
`

export const FooterStyledLink = styled(StyledLink)`
    padding: 10px;
`