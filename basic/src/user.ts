// account info
type AccountInfo = {
	id: number;
	name: string;
	email?: string;
};

const account: AccountInfo = {
	id: 123,
	name: 'Danilo'
};

type CharInfo = {
	nickname: string;
	level: number;
};

const char: CharInfo = {
	nickname: 'geeklopz',
	level: 100
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
	id: 123,
	name: 'Danilo',
	nickname: 'geeklopz',
	level: 100
};
