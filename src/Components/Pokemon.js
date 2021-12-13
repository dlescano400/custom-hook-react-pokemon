import React from 'react'
import PokemonCard from './Card';
import usePokemon from '../CustomHooks/usePokemon';

const Pokemon = () => {
	
	const poke1 = usePokemon()
	const poke2 = usePokemon()

	return <>
		<div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
			<div className="poke1">
				<label>pokemon</label>
				<input type="text" value={poke1.name} onChange={(e) => poke1.setName(e.target.value)}/>
				<button onClick={() => {poke1.search()}}>search</button>

				{
					poke1.loading ? <p>cargando...</p>
					: poke1.pokemon ? <PokemonCard data={poke1.pokemon}/>
					: poke1.error ? <p>{poke1.error}</p>
					: ''
				}
			</div>
			<div className="poke2">
				<label>pokemon</label>
				<input type="text" value={poke2.name} onChange={(e) => poke2.setName(e.target.value)}/>
				<button onClick={() => {poke2.search()}}>search</button>

				{
					poke2.loading ? <p>cargando...</p>
					: poke2.pokemon ? <PokemonCard data={poke2.pokemon}/>
					: poke2.error ? <p>{poke2.error}</p>
					: ''
				}
			</div>

		</div>
		
	</>

}

export default Pokemon