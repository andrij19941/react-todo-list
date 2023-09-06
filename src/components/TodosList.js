import React from 'react';

const TodosList = ({ todos }) => {
	return (
		<div>
			{' '}
			{todos.map((todo) => (
				<li className="list-item">
					<input className="list" type="text" value={todo.title} onChange={(event) => event.preventDefault()} />
					<div>
						<button className="button-complete "></button>
					</div>
				</li>
			))}
		</div>
	);
};

export default TodosList;

// import React from 'react';

// const TodosList = (todos, setTodos) => {
// 	return (
// 		<div>
// 			{todos.map((todo) => {
// 				<li className="todo-list" key={todo.id}>
// 					<input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
// 				</li>;
// 			})}
// 		</div>
// 	);
// };

// export default TodosList;
