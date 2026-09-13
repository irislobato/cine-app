import React from 'react'
import "../Pages/Home.css"

export default function SearchBar({busca, aoMudarBusca}) {
    return <input type="text" placeholder="🔍︎  Buscar filme ou série..."
        value={busca}
        onChange={aoMudarBusca}
    className='input-busca'/>;
}
