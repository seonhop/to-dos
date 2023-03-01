import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "todoLocal",
	storage: localStorage,
});

export enum Categories {
	"TO_DO" = "TO_DO",
	"DOING" = "DOING",
	"DONE" = "DONE",
}
export interface IToDo {
	text: string;
	id: number;
	category: string;
}

export let defaultCategories: string[] = ["To Do", "Doing", "Done"];

export const categoryState = atom<string>({
	key: "category",
	default: defaultCategories[0],
});

export let categoriesState = atom<string[]>({
	key: "categories",
	default: defaultCategories,
	effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
	key: "toDos",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDoState);
		const category = get(categoryState);
		console.log("category: ", category);
		return toDos.filter((toDo) => toDo.category === category);
	},
});
