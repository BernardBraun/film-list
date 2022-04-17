import React from "react";
import './styles.css'
import { Link } from "react-router-dom";


export default function NotFound() {
    return(
        <div className="not-found">
            <h1>404 - Página não encontrada!</h1>
            <h3><Link to="/">Retorne para nossa página inicial aqui</Link></h3>
        </div>
    )
}