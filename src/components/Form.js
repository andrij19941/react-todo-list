import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Form = ({ input, setInput, todos, setTodos }) => {
	const onInputChange = (event) => {
		setInput(event.target.value);
	};
	const onFormSubmit = (event) => {
		event.preventDefault();
		setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
		setInput('');
	};
	return (
		<form onSubmit={onFormSubmit}>
			<input type="text" placeholder="Введіть список..." className="task-input" value={input} required onChange={onInputChange} />
			<button type="submit" className="button-add">
				Додати
			</button>
		</form>
	);
};
export default Form;
