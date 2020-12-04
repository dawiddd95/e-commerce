import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CountWrapper = styled.div`
    width: 30px;
    height: 30px;
    margin: -25px 0 0 20px;
    font-size: 10px;
    color: ${ ({theme}) => theme.color.primary};
    background-color: ${ ({theme}) => theme.background.primary};
    position: absolute;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`