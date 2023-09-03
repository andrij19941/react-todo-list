import React from 'react';

export const Form = ({ input, setInput, todos, setTodos }) => {
	const onInputChange = (event) => {
		setInput(event.target.value);
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
