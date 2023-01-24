export type Result = {
	name: string;
	url: string;
};

export type Pokemons = {
	count: number;
	next: string;
	previous?: null;
	results: Result[];
};
