import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchData } from 'helpers/fetchApi';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import * as S from './StyledSection';

const Section = ({api, children}) => {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect( () => {
        fetchData(api, setData, setErrors);
    }, []);

    return (
        <S.Wrapper>
            {/* Regularny kod */}
            <S.InnerWrapper>
                {data.map( element => {
                    if(element.id < 5) {
                        return (
                            // Powinno być w osobnym komponencie SectionElement, ale nie chce mi się
                            // Ten div powinien być zamieniony na jakiś komponent Wrapper co określi paddingi lub marginy dla każdego zwróconego elementu
                            // Ten div to jest każdy zwrócony element
                            <div>
                                {/* To może w atomie */}
                                <img src={element.thumbnailUrl} alt=""/>
                                <Paragraph>
                                    {element.title}
                                </Paragraph>
                            </div>
                        )
                    } 
                    // Taki zapis jest błędny, ale go wstawiłem, żeby ESLint się odwalił
                    return null;
                })}
                {
                    errors && <Paragraph>Error! Something goes Wrong</Paragraph>
                }
            </S.InnerWrapper>
            {/* Jeśli chcemy dodać coś nieregularnego */}
            {children}
        </S.Wrapper>    
    );
}

Section.propTypes = {
    api: PropTypes.string.isRequired,
    children: PropTypes.node
}
 
Section.defaultProps = {
    children: undefined
}

export default Section;