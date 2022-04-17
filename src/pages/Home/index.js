import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';


export default function Home() {

    const api = axios.create ({
        baseURL: 'https://sujeitoprogramador.com/'
    });


    
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes');
            setFilmes(response.data);
        }

        loadFilmes();

    }, []);
    

    return (
        <div className='container'>
             <div className='lista-filmes'>
                 {filmes.map((filme) => {
                     return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to={location => `/filme/${filme.id}`}>Acessar</Link>
                        </article>
                     )
                 })}
             </div>
        </div>
  ); 
}

/*
  <Link to={location => `${location.pathname}?sort=name`} />
*/
