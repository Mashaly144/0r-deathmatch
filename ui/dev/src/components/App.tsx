import React from 'react';
import { Home } from '@/pages/Home/index';
import useData from '@/hooks/useData';
import { CreateLobby } from '@/pages/CreateLobby';
import { Lobbies } from '@/pages/Lobbies';
import { InGame } from '@/pages/InGame';

const App: React.FC = () => {
  const { page } = useData();

  return (
    <>
      {page == 'profile' && <Home />}
      {page == 'create-lobby' && <CreateLobby />}
      {page == 'lobbies' && <Lobbies />}
      {page == 'in-game' && <InGame />}
    </>
  );
};

export default App;
