import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Categories, categoriesState, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
	const categories = useRecoilValue(categoriesState);
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(event);
		const {
			currentTarget: { name },
		} = event;
		console.log("name: ", name);
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { text, id, category: name as any };
			return [
				...oldToDos.slice(0, targetIndex),
				newToDo,
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};
	return (
		<li>
			<span>{text}</span>
			{Object.values(categories).map((curr_category) => (
				<button
					name={curr_category}
					disabled={curr_category === category}
					key={curr_category}
					onClick={onClick}
				>
					{curr_category}
				</button>
			))}
		</li>
	);
}

export default ToDo;
