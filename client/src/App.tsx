import { Routes, Route } from 'react-router-dom';

import DashBoard from './DashBoard';
import Authentication from './Authentication';
import { CreateNote, UpdateNotes, NavBar } from './components';

function App() {
  return (
    <div id='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/create' element={<CreateNote />} />
        <Route path='update/:id' element={<UpdateNotes />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;

// const [screen, setScreen] = useState<currentScreen>('home');
// const [updateId, setUpdateId] = useState('');

//<div className='flex flex-col'>
// {screen === 'home' ? (
//   <DashBoard setScreen={setScreen} setUpdateId={setUpdateId} />
// ) : screen === 'create' ? (
//   <CreateNote />
// ) : screen === 'update' ? (
//   <UpdateNotes id={updateId} />
// ) : (
//   <Authentication />
// )}
//</div>
