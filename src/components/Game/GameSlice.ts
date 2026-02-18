import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  gameStatus: 'not started' | 'started' | 'finished';
  currentStep: number;
  score: number;
}

const initialState: GameState = {
  gameStatus: 'not started',
  currentStep: 0,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: () => ({ ...initialState, gameStatus: 'started' as const }),
    endGame: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
      state.gameStatus = 'finished';
    },
    increaseCurrentStep: (state) => {
      state.currentStep += 1;
    },
  },
});

export const {
  startGame,
  endGame,
  increaseCurrentStep,
} = gameSlice.actions;

export default gameSlice.reducer;
