import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colorBg: string;
		colorNavBar: string;
		colorBlock: string;
		colorPrimary: string;
		colorSecondary: string;
		colorTertiary: string;
		colorHover: string;
		colorBtnHover?: string;
		colorThemeOn: string;
		textPrimary: string;
		textSecondary: string;
		textRPrimary?: string;
		textRSecondary?: string;
		changePos: string;
		changeNeg: string;
		changeNone: string;
	}
}
