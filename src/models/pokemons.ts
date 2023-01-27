export type ResultName = { name: string };

export interface Result extends ResultName {
	url: string;
}
export interface TransformResult extends ResultName {
	id: string;
}

export type Pokemons<T> = {
	count: number;
	next: string;
	previous?: null;
	results: T[];
};
