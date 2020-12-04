import styled from 'styled-components';
import { StyledLink } from 'components/atoms/Link/Link';

export const Wrapper = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DropdownWrapper = styled.div`
    width: ${ ({width}) => width || '50%'};
	height: auto;
    margin: 70px 0 0 0;
	background-color: #fff;
	position: absolute;
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.2);

    display: flex;
    flex-direction: column;
`

export const DropdownStyledLink = styled(StyledLink)`
    padding: 12px;
`