import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";

interface IForm {
	toDo: string;
}

const CreateToDoForm = styled.form`
	display: flex;
	flex: 1;
	width: 100%;
	input {
		width: 100%;
		height: 40px;
	}
	gap: 8px;
`;

function CreateToDo() {
	const setToDos = useSetRecoilState(toDoState);
	const category = useRecoilValue(categoryState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = ({ toDo }: IForm) => {
		setToDos((oldToDos) => [
			{ text: toDo, id: Date.now(), category },
			...oldToDos,
		]);
		setValue("toDo", "");
	};
	return (
		<CreateToDoForm onSubmit={handleSubmit(handleValid)}>
			<input
				{...register("toDo", {
					required: "Please write a To Do",
				})}
				placeholder="Write a to do"
			/>
			<button>Add</button>
		</CreateToDoForm>
	);
}

export default CreateToDo;
