import React from 'react';
import PokemonsSlider from '../../components/PokemonsSlider';

const Pokemons = () => {
	return (
		<section style={{ padding: 20, position: 'relative' }}>
			<h1 style={{ textAlign: 'center' }}>Get pokemons using rtk-query</h1>
			<PokemonsSlider />
		</section>
	);
};

export default Pokemons;
