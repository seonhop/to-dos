import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
	Categories,
	categoryState,
	toDoSelector,
	categoriesState,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const [category, setCategory] = useRecoilState(categoryState);
	const [categories, setCategories] = useRecoilState(categoriesState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as any);
	};
	const addNewCategory = () => {
		const newCategory = prompt("Enter the name of your new category", "");
		if (newCategory) {
			if (categories.includes(newCategory)) {
				alert(`There already exists a category named ${newCategory}`);
				return;
			}
			setCategories((oldCategories) => [...oldCategories, newCategory]);
			setCategory(newCategory);
		}
	};
	console.log(toDos);
	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<button onClick={addNewCategory}>Create New Category</button>
			<select value={category} onInput={onInput}>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
			<CreateToDo />
			{toDos?.map((toDo) => (
				<ToDo key={toDo.id} {...toDo} />
			))}
		</div>
	);
}

export default ToDoList;
