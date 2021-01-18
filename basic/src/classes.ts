class UserAccount {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	};

};

const Me = new UserAccount("Danilo", 30);
console.log(Me);
