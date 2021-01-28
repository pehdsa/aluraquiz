import React, { useState } from 'react';

import Widget from '../Widget';
import Button from '../Button';


export default function QuestionWidget({ questionIndex, totalQuestions, question, onSubmit }) {
    
    const [ selectedAlt, setSelectedAlt ] = useState(undefined);
    const [ isFormSubmited, setIsFormSubmited ] = useState(false);
    const nameInput = `question__${ questionIndex }`;
    
    
    return (
        <Widget>
            
            <Widget.Header>
                <h1>{ `Pergunta ${questionIndex + 1} de ${ totalQuestions }` }</h1>
            </Widget.Header>

            <img 
                alt="descricao" 
                style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                src={question.image}
            />

            <Widget.Content>                        
                <h2>{ question.title }</h2>
                <p>{ question.description }</p>

                <form 
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        setIsFormSubmited(true);
                        setTimeout(() => {                            
                            onSubmit();
                            setIsFormSubmited(false);                            
                        },500);                        
                    }}
                >
                    

                    { question.alternatives.map((item, index) => {
                        const inputId = `alternativa__${index}`;
                        return(
                            <Widget.Topic key={ index } as="label" htmlFor={ inputId } >                                
                                <input 
                                    id={ inputId } 
                                    name={ nameInput } 
                                    onChange={() => { setSelectedAlt(index) }}
                                    type="radio" 
                                />
                                { item }                                                                
                            </Widget.Topic>
                        )
                    }) }

                    <Button type="submit" disabled={selectedAlt ? false : true}>CONFIRMAR</Button>
                    
                    { isFormSubmited && (
                        <>
                            { selectedAlt === question.answer ? (
                                <p>Você acertou</p> 
                            ) : (
                                <p>Você errou</p>
                            )} 
                        </>
                    ) }
                             
                    

                </form>
            </Widget.Content>            

        </Widget>
    )
}