import React from 'react';

const TodosList = ({ todos }) => {
	return (
		<div>
			<ul>
				{' '}
				{/* Исправил тег на ul */}
				{todos.map((todo) => (
					<li className="todo-list" key={todo.id}>
						<input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
					</li>
				))}
			</ul>
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
