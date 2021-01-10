import React from 'react';

// Type TS
interface IUser {
	name: string;
	email: string;
}

interface Props {
	user: IUser;
}

// component
// Props w/ children
const User: React.FC<Props> = ({ user }: Props) => {
	return (
		<div>
			<strong>Nome: </strong> { user.name } <br />
			<strong>E-mail: </strong> { user.email } <br />
		</div>
	);
};

export default User;
