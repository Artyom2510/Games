export type Ability2 = {
	name: string;
	url: string;
};

export type Ability = {
	ability: Ability2;
	is_hidden: boolean;
	slot: number;
};

export type Form = {
	name: string;
	url: string;
};

export type Version = {
	name: string;
	url: string;
};

export type GameIndice = {
	game_index: number;
	version: Version;
};

export type Move2 = {
	name: string;
	url: string;
};

export type MoveLearnMethod = {
	name: string;
	url: string;
};

export type VersionGroup = {
	name: string;
	url: string;
};

export type VersionGroupDetail = {
	level_learned_at: number;
	move_learn_method: MoveLearnMethod;
	version_group: VersionGroup;
};

export type Move = {
	move: Move2;
	version_group_details: VersionGroupDetail[];
};

export type Species = {
	name: string;
	url: string;
};

export type DreamWorld = {
	front_default: string;
	front_female?: any;
};

export type Home = {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type OfficialArtwork = {
	front_default: string;
	front_shiny: string;
};

export type Other = {
	'dream_world': DreamWorld;
	'home': Home;
	'official-artwork': OfficialArtwork;
};

export type RedBlue = {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
};

export type Yellow = {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
};

export type GenerationI = {
	'red-blue': RedBlue;
	'yellow': Yellow;
};

export type Crystal = {
	back_default: string;
	back_shiny: string;
	back_shiny_transparent: string;
	back_transparent: string;
	front_default: string;
	front_shiny: string;
	front_shiny_transparent: string;
	front_transparent: string;
};

export type Gold = {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
};

export type Silver = {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
};

export type GenerationIi = {
	crystal: Crystal;
	gold: Gold;
	silver: Silver;
};

export type Emerald = {
	front_default: string;
	front_shiny: string;
};

export type FireredLeafgreen = {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
};

export type RubySapphire = {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
};

export type GenerationIii = {
	'emerald': Emerald;
	'firered-leafgreen': FireredLeafgreen;
	'ruby-sapphire': RubySapphire;
};

export type DiamondPearl = {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type HeartgoldSoulsilver = {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type Platinum = {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type GenerationIv = {
	'diamond-pearl': DiamondPearl;
	'heartgold-soulsilver': HeartgoldSoulsilver;
	'platinum': Platinum;
};

export type Animated = {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type BlackWhite = {
	animated: Animated;
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type GenerationV = {
	'black-white': BlackWhite;
};

export type OmegarubyAlphasapphire = {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type XY = {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type GenerationVi = {
	'omegaruby-alphasapphire': OmegarubyAlphasapphire;
	'x-y': XY;
};

export type Icons = {
	front_default: string;
	front_female?: any;
};

export type UltraSunUltraMoon = {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
};

export type GenerationVii = {
	'icons': Icons;
	'ultra-sun-ultra-moon': UltraSunUltraMoon;
};

export type Icons2 = {
	front_default: string;
	front_female?: any;
};

export type GenerationViii = {
	icons: Icons2;
};

export type Versions = {
	'generation-i': GenerationI;
	'generation-ii': GenerationIi;
	'generation-iii': GenerationIii;
	'generation-iv': GenerationIv;
	'generation-v': GenerationV;
	'generation-vi': GenerationVi;
	'generation-vii': GenerationVii;
	'generation-viii': GenerationViii;
};

export type Sprites = {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
	other: Other;
	versions: Versions;
};

export type Stat2 = {
	name: string;
	url: string;
};

export type Stat = {
	base_stat: number;
	effort: number;
	stat: Stat2;
};

export type Type2 = {
	name: string;
	url: string;
};

export type Type = {
	slot: number;
	type: Type2;
};

export type Pokemon = {
	abilities: Ability[];
	base_experience: number;
	forms: Form[];
	game_indices: GameIndice[];
	height: number;
	held_items: any[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Move[];
	name: string;
	order: number;
	past_types: any[];
	species: Species;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
};
