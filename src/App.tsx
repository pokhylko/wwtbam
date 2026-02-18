import { Start } from '@/components/Start';
import { Game } from '@/components/Game';

import './App.scss';
import { useAppSelector } from '@/store/hooks';

export const App = () => {
  const { gameStatus } = useAppSelector((state) => state.game);

  return gameStatus === 'started' ? <Game /> : <Start />;
};
