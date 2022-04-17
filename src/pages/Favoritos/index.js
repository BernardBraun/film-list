import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.css'

export default function Favoritos() {
    
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const myList = localStorage.getItem('filmes');
        setFilmes(JSON.parse(myList) || []);

    }, [])

    function handleDelete(id) {
        let filtroFilmes = filmes.filter((item)=>{
            toast.success('Filme excluído com sucesso!')
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
    }
    
    return(
        <div id='meus-filmes'>
            <h1>Meus Filmes Favoritos</h1>

            {filmes.length === 0 && <span>Você ainda não possui filmes salvos! :(</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => handleDelete(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}