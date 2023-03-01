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
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 50px;
	list-style-type: none;
`;

const Title = styled.h1`
	font-size: 3rem;
`;

const CategoryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const CategoryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	span {
		margin-right: 4px;
	}
	button {
		margin-left: 1rem;
	}
	margin: 20px 0 20px 0;
`;

const HLine = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.textPrimary};
	height: 1px;
	margin: 20px 0 20px 0;
`;

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
		<Container>
			<Title>To Do</Title>
			<CategoryContainer>
				<div>
					<span>Category: </span>
					<select value={category} onInput={onInput}>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>

				<button onClick={addNewCategory}>Create New Category</button>
			</CategoryContainer>

			<CreateToDo />
			<HLine />
			{toDos?.map((toDo) => (
				<ToDo key={toDo.id} {...toDo} />
			))}
		</Container>
	);
}

export default ToDoList;
