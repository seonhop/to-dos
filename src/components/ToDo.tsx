import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Categories, categoriesState, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

const ToDoLi = styled.li`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 20px;
	background-color: ${(props) => props.theme.colorSecondary};
	width: 100%;
	padding: 20px;
	border-radius: 8px;
	color: ${(props) => props.theme.textPrimary};
	margin-bottom: 20px;
`;

const CategoryButtonsContainer = styled.div`
	display: flex;
	gap: 4px;
`;

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
		<ToDoLi>
			<span>{text}</span>
			<CategoryButtonsContainer>
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
			</CategoryButtonsContainer>
		</ToDoLi>
	);
}

export default ToDo;
