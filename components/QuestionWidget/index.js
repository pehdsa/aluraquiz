import React from 'react';

import Widget from '../Widget';
import Button from '../Button';


export default function QuestionWidget({ questionIndex, totalQuestions, question, onSubmit }) {
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
                        onSubmit();
                    }}
                >
                    
                    { question.alternatives.map((item, index) => {
                        const inputId = `alternativa__${index}`;
                        return(
                            <Widget.Topic as="label" htmlFor={ inputId } >                                
                                <input id={ inputId } name={ nameInput } type="radio" />
                                { item }                                                                
                            </Widget.Topic>
                        )
                    }) }

                    <Button type="submit">CONFIRMAR</Button>

                </form>
            </Widget.Content>            

        </Widget>
    )
}