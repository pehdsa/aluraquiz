import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../components/Widget';
import QuizLogo from '../components/QuizLogo';
import QuizContainer from '../components/QuizContainer';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import Button from '../components/Button';

// import { Container } from './styles';

function QuestionWidget({ questionIndex, totalQuestions, question }) {
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
                <Button>CONFIRMAR</Button>
            </Widget.Content>            

        </Widget>
    )
}


function Quiz() {

    const [ questionIndex, setQuestionIndex ] = useState(0);
    const [ totalQuestions, setTotalQuestions ] = useState(2);
    const [ questions, setQuestions ] = useState(db.questions);

    return (
        <QuizBackground backgroundImage={db.bg}>
                
            <QuizContainer>
                
                <QuizLogo />

                <QuestionWidget 
                    questionIndex={ questionIndex }
                    totalQuestions={ totalQuestions }
                    question={ questions[0] }
                />

                <Footer />

            </QuizContainer>

            <GitHubCorner 
                projectUrl="https://github.com/omariosouto" 
            />

        </QuizBackground>
    );
}

export default Quiz;