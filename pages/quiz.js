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

function Quiz() {

    const [ screenState, setScreenState ] = useState(scrState.LOADING)
    const [ questionIndex, setQuestionIndex ] = useState(0);
    const [ totalQuestions, setTotalQuestions ] = useState(db.questions.length);
    const [ questions, setQuestions ] = useState(db.questions);

    useEffect(() => {
        setTimeout(() => {
            setScreenState(scrState.QUIZ)
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
                            <div>oaloalaoao</div>
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