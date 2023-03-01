import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap');
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, menu, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}
	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
		display: none;
	}
	body {
	line-height: 1;
	}
	menu, ol, ul {
	list-style: none;
	}
	blockquote, q {
	quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
	content: '';
	content: none;
	}
	table {
	border-collapse: collapse;
	border-spacing: 0;
	}
	* {
		box-sizing: border-box;
	}
	body {
		font-family: 'Open Sans', sans-serif;
		height: 100vh;
		background-color: ${(props) => props.theme.colorBg};
		color: ${(props) => props.theme.textPrimary}

	}
	a {
		text-decoration: none;
		color: inherit;
	}
	#root {
		display: flex;
		flex-direction: row;		
	}
	button {
		background-color: ${(props) => props.theme.colorTertiary};
		border: none;
		outline: none;
		color: ${(props) => props.theme.textPrimary};
		padding: 4px 12px;
		border-radius: 4px;
		:disabled {
			background-color: ${(props) => props.theme.colorBg};
			color: ${(props) => props.theme.textSecondary};

		}
		:hover {
			background-color: ${(props) => props.theme.colorSecondary};
			cursor: pointer;
		}

	}
`;

const ToDoListContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;
	max-width: 50rem;
	margin: 0 auto;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<ToDoListContainer>
				<ToDoList />
			</ToDoListContainer>
		</>
	);
}

export default App;
