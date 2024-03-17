import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    isDark: boolean;
}

const initialState: InitialState = {
    isDark: true
};

const theme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state, action: PayloadAction<boolean>){
            action.payload ? (state.isDark = true) : (state.isDark = false);
        }
    }
});

export const {toggleTheme} = theme.actions;
export default theme.reducer;