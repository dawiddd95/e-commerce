import styled from 'styled-components';

export const Dropdown = styled.div`
    width: ${ ({width}) => width || '50%'};
	height: auto;
	background-color: #fff;
	position: relative;
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.2);

    display: flex;
    flex-direction: column;
`