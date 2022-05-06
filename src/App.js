import { useEffect } from 'react';
import Counter from './components/Counter';
// import Counter from './components/CounterClass';

function App() {
  // useEffect(() => {
  //   window.gapi.load('client:auth2', async () => {
  //     await window.gapi.client.init({
  //       clientId:
  //         '953472252759-b3a92qg8d5c51f63ig68uj7l6mrje4mg.apps.googleusercontent.com',
  //       // Scope - know your email, access your profile
  //       scope: 'email',
  //     });
  //   });
  // }, []);

  return <Counter />;
}

export default App;
