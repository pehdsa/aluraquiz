import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../components/Widget';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import Input from '../components/Input';
import Button from '../components/Button';

import Header from '../components/Header';

export default function Home() {

    const navigation = useRouter();    
    const [ name, setName ] = useState('');

    return (
        
        <React.Fragment>
            
            <Header />
            
            <QuizBackground backgroundImage={db.bg}>
                
                <QuizContainer>
                    
                    <QuizLogo />
                    
                    <Widget>
                        <Widget.Header>
                            <h1>{db.title}</h1>
                        </Widget.Header>
                        <Widget.Content>
                            <p>{db.description}</p>
                            
                            <form onSubmit={function (infosDoEvento) {
                                infosDoEvento.preventDefault();
                                navigation.push(`/quiz?name=${name}`);
                                console.log('Fazendo uma submissão por meio do react');
                            }}
                            >
                                <Input
                                    name="nomeDoUsuario"
                                    onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                                    placeholder="Diz ai seu nome"
                                    value={ name }
                                />
                                <Button type="submit" disabled={name.length === 0 ? true : false}>
                                    {`Jogar ${name}`}
                                </Button>
                            </form>

                        </Widget.Content>
                    </Widget>

                    <Widget>
                        <Widget.Content>
                            <h1>Quizes da Galera</h1>
                            <p>lorem ipsum dolor sit amet...</p>
                        </Widget.Content>
                    </Widget>

                    <Footer />

                </QuizContainer>

                <GitHubCorner 
                    projectUrl="https://github.com/omariosouto" 
                />

            </QuizBackground>

        </React.Fragment>

    );
}