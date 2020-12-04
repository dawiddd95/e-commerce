import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`

export const IconWrapper = styled.div`
    width: 65px;
    height: 65px;
    margin: 0 10px 0 0;
    border-radius: 4px;
    background-color: ${ ({background, theme}) => background || theme.background.transparent};
    transition: .3s;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        border-radius: 50%;
        transition: .3s;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`