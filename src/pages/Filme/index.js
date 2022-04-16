import React from 'react';
import { useEffect, useState } from 'react';
import './styles.css';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Filme(){

    const api = axios.create ({
        baseURL: 'https://sujeitoprogramador.com/'
    });

    const {id} = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilmes();

        return () => { console.log('Componente desmontado')}
    },[history, id]);

    if(loading){
        return(
        <h1>Carregando seu filme...</h1>
        )
    }else {

    return(
        <div className='filme-info'>
             <h1>{filme.nome}</h1>
             <img scr={filme.foto} alt={filme.nome}/>
             <h3>Sinopse:</h3>
             <p>{filme.sinopse}</p>

            <div className='botoes'>
                <button onClick={()=>{}} >Salvar</button>
                <button>
                    <a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome}+Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
    }
}