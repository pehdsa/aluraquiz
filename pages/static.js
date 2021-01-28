import React, { useState, useEffect } from 'react';

export default function Static(props) {

    useEffect(() => {
        console.log(props);
    },[]);

    return (
        <div style={{ color: '#000' }}>            
            <h1>{ props.dadosDoGitHub.name }</h1>            
            <h2>{ props.dadosDoGitHub.login }</h2>
            <div>ola</div>
        </div>
    );
}

export async function getStaticProps() {
    
    // ESSE PARTE VAI CARREGAR VIA SERVIDOR (RETORNANDO DADOS "ESTATICOS" PARA O SEO)
    //const retorno = await fetch('https://api.github.com/users/pehdsa').then((resp) => resp.json());

    try {

        const res = await fetch(`https://api.github.com/users/pehdsa`);
        const data = await res.json();

        // VAI RETORNAR OS DADOS PARA O COMPONENTE EXPORT DEFAULT "STATIC" COMO "props"
        return {
            props: {                
                dadosDoGitHub: data
            }
        }

    } catch (err) {
        throw new Error('Deu ruim!');
    }
}
