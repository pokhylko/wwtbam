import { useState, useEffect, useCallback, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Answer, QuestionType } from '@/types';
import { endGame, increaseCurrentStep } from '@/components/Game/GameSlice';
import questions from '@/data/game-configuration.json';

export const useGameFlow = () => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.game);

  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const progressTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const currentQuestion: QuestionType = questions[currentStep];

  const gameOver = useCallback((finishStep: number) => {
    const score = finishStep === 0 ? 0 : questions[finishStep - 1].prize;
    dispatch(endGame(score));
  }, [dispatch]);

  const handleAnswer = (answer: Answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    revealTimerRef.current = setTimeout(() => {
      setIsAnswerCorrect(answer.isCorrect);
    }, 1000);
  };

  useEffect(() => {
    if (isAnswerCorrect) {
      progressTimerRef.current = setTimeout(() => {
        if (currentStep === questions.length - 1) {
          gameOver(currentStep + 1);
          return;
        }

        dispatch(increaseCurrentStep());
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
      }, 1500);
    } else if (isAnswerCorrect === false) {
      progressTimerRef.current = setTimeout(() => {
        setIsAnswerCorrect(null);
        gameOver(currentStep);
      }, 1500);
    }

    return () => {
      clearTimeout(progressTimerRef.current);
    };
  }, [currentStep, dispatch, gameOver, isAnswerCorrect]);

  useEffect(() => {
    return () => {
      clearTimeout(revealTimerRef.current);
    };
  }, []);

  return { currentQuestion, selectedAnswer, isAnswerCorrect, handleAnswer };
};
