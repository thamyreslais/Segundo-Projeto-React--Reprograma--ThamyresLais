import { useState, useEffect } from 'react'
import Axios  from 'axios'

const Card = () => {
    const [repositorios, setRepositorios] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get('https://api.github.com/users/thamyreslais/repos')
            const data = await response.data
            setRepositorios(data)
        }

        fetchData()
    }, [])

    useEffect(()=>{
        setFiltro(
            repositorios.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    }, [repositorios, busca])
    
    return(
        <>
        <input placeholder= 'Digite o nome do repositório' onChange={e => {setBusca(e.target.value)}}/>
        <h2>Meus Repositórios</h2>
        <ul>
            {filtro.map(item =>
                <li key={item.id}>{item.name}</li>
                )}
        </ul>
        </>
    )
}

export default Card