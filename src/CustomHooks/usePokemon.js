import { useEffect, useState } from 'react'
import axios from 'axios'

const usePokemon = () => {
	const endpoint = "https://pokeapi.co/api/v2/pokemon/";

	const [loading, setLoading] = useState(false)
	const [pokemon, setPokemon] = useState(null)
	const [error, setError] = useState(null)
	const [name, setName] = useState('')
	const [init, setInit] = useState(false)

	useEffect(() => {
		if (name && init) {
			const url = endpoint + name
			setLoading(true)
			axios
				.get(url)
				.then((res) => {
					setPokemon(res.data)
				})
				.catch((error) => {
					if (error.response) {
						if(error.response.status === 404) {
							setError('no existe el pokemon')
						} else {
							setError('ocurrio un error en el servidor')
						}
					}
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setError(null)
			setPokemon(null)
		}
		setInit(false)
	}, [init, name])

	const search = () => { 
		if(name){
			setInit(true) 
		}
	}

  return { pokemon, loading, error, setName, name, search };
};

export default usePokemon