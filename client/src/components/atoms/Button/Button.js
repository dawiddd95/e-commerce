import styled from 'styled-components';

export const Button = styled.button`
	height: 40px;
	padding: 0 10px;
	/* Nie możemy użyć zapisu theme, ponieważ da to kolor primary na wszystkich buttonach w zależności od themu jakiego używamy, czy light czy dark */
	/* Kolor primary themu light lub dark */
	/* background-color: { dolar({theme}) => theme.primary}; */
	/* A my chcemy by różne kolory dawało buttonom z tego samego themu, jakiemuś buttonowi primary z tego theme, innemu secondary z tego samego theme */
	/* Jeśli podamy props background to ma dać tło z tego co tam wpiszemy np: background='red' w przeciwnym wypadku niech domyślnie da kolor primary z theme */
	background-color: ${ ({background, theme}) => background || theme.background.primary};
	color: ${ ({color, theme}) => color || theme.color.primary};
	font-weight: 400;
	text-transform: ${ ({uppercase}) => uppercase ? 'uppercase' : 'none'};
	text-align: left;
	border: ${ ({border, theme}) => border ? theme.border : '0'};
	/* Bo może być sam button z ikonki i jako koło */
	border-radius: ${ ({borderRadius}) => borderRadius || '4px'};
	outline: 0;
	cursor: pointer;

	/* Pamiętaj, że jeśli będziemy przekazywali za dużo propsów styli do komponentu to lepiej to wyodrębnić jako && css */
`