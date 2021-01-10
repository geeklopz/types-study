import React, { useEffect, useState } from 'react';
import api from './services/api';

import User from './components/User';

// Type TS
interface IUser {
	name: string;
	email: string;
}

function App() {
	// armazena estado
	const [users, setUsers] = useState<IUser[]>([]);

	// carregou componente
	useEffect(() => {
		api.get<IUser[]>('/users').then(response => {
			setUsers(response.data);
		})
	}, []);


  return (
    <div className="App">
			{/* { users.map(user => <p key={ user.name }>{ user.name } - { user.email }</p>) } */}
			{ users.map(user => <User key={ user.email } user={ user } />) }
    </div>
  );
}

export default App;
