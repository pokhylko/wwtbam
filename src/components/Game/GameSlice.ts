import { createSlice } from '@reduxjs/toolkit';

import { QuestionType } from 'src/types';

import questions from '../../data/game-configuration.json';

type GameState = {
  gameStatus: 'not started' | 'started' | 'finished';
  currentStep: number;
  questions: QuestionType[];
  score: number;
};

const initialState: GameState = {
  gameStatus: 'not started',
  currentStep: 0,
  questions,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startedGame: (state) => {
      state.gameStatus = 'started';
    },
    finishedGame: (state) => {
      state.gameStatus = 'finished';
    },
    reloadGame: (state) => {
      state.gameStatus = 'not started';
    },
    increaseCurrentStep: (state) => {
      state.currentStep += 1;
    },
    resetCurrentStep: (state) => {
      state.currentStep = 0;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const {
  startedGame,
  finishedGame,
  reloadGame,
  increaseCurrentStep,
  resetCurrentStep,
  setScore,
} = gameSlice.actions;

export default gameSlice.reducer;
