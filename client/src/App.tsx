// App.tsx
import React from 'react';
import UserProfile from './components/useContext/UserProfile';
import { UserProvider } from './components/useContext/UseContext';

const App: React.FC = () => (
  <UserProvider>
    <UserProfile />
  </UserProvider>
);

export default App;
