import React, { useState, useEffect } from 'react';

import db from '../db.json';
import Widget from '../components/Widget';
import QuizLogo from '../components/QuizLogo';
import QuizContainer from '../components/QuizContainer';
import QuizBackground from '../components/QuizBackground';
import QuestionWidget from '../components/QuestionWidget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
//import Button from '../components/Button';

const scrState = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
}

function ResultWidget({ results }) {

    const countRights = results.filter(item => item).length;

    return (
        <Widget>
            
            <Widget.Header>
                Tela de Resultado
            </Widget.Header>

            <Widget.Content>                        
                <p>Você acertou { countRights } {`quest${ countRights > 1 ? 'ões' : 'ão' }`}</p>
                <ul>
                    { results.map((item, index) => {
                        return (
                            <li key={ index }>#{ index + 1 } Resultado: { item ? 'Certo' : 'Errado'  }</li>
                        )
                    }) }
                    
                </ul>
            </Widget.Content>            

        </Widget>
    )
}

function Quiz() {

    const [ screenState, setScreenState ] = useState(scrState.LOADING);
    const [ results, setResults ] = useState([ true, false, true ]);

    const [ questionIndex, setQuestionIndex ] = useState(0);
    const [ totalQuestions, setTotalQuestions ] = useState(db.questions.length);
    const [ questions, setQuestions ] = useState(db.questions);

    useEffect(() => {
        setTimeout(() => {
            setScreenState(scrState.RESULT)
        }, 1000);
    },[])

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setScreenState(scrState.RESULT);
        }        
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
                
            <QuizContainer>
                
                <QuizLogo />

                { screenState === scrState.LOADING ? (
                    
                    <div>Loading</div>

                ) : (
                    
                    <React.Fragment>

                        { screenState === scrState.QUIZ && (
                            <QuestionWidget                     
                                questionIndex={ questionIndex }
                                totalQuestions={ totalQuestions }
                                question={ questions[questionIndex] }
                                onSubmit={ handleSubmitQuiz }
                            />
                        ) }

                        { screenState === scrState.RESULT && (
                            <ResultWidget results={ results } />
                        )}

                        <Footer />

                    </React.Fragment>

                )}               

            </QuizContainer>

            <GitHubCorner projectUrl="https://github.com/omariosouto" />

        </QuizBackground>
    );
}

export default Quiz;