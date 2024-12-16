import { useState } from 'react';
import { USERS } from '../../constants/info-users';

const ContainerUsers = () => {
	const [counter, setCounter] = useState(0);

	const sumCounter = () => {
		setCounter(counter + 1);
	};

	const subsCounter = () => {
		setCounter(counter - 1);
	};

	return (
		<div>
			<img src={USERS[counter].profileImage} alt={USERS[counter].name} />
			<h1>Name: {USERS[counter].name}</h1>
			<p>Username: {USERS[counter].username}</p>
			<p>Email: {USERS[counter].email}</p>
			<button onClick={subsCounter} disabled={counter === 0 ? true : false}>
				Previous
			</button>
			<button
				onClick={sumCounter}
				disabled={counter === USERS.length - 1 ? true : false}
			>
				Next
			</button>
		</div>
	);
};

export default ContainerUsers;
