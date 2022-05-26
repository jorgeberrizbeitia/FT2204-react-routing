import logo from './logo.svg';
import './App.css';
import TimerControl from './pages/TimerControl';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileList from './pages/ProfileList';
import PokemonNav from './components/PokemonNav';
import PokemonProfile from './pages/PokemonProfile';

// function App() {
//   return (
//     <div className="App">

//       {/* <TimerControl /> */}

//       {/* <a href="/">Home</a>
//       <a href="/timer">Timer</a> */}

//       <div id="nav">
//         <Link to="/">Home</Link>
//         <Link to="/timer">Timer</Link>
//         <Link to="/profile-list">Lista de Profiles</Link>
//         <Link to="/profile/caro/perrito">Profile de Caro</Link>
//         <Link to="/profile/eva/conejito">Profile de Eva</Link>
//       </div>

//       {/* organiza todas las rutas => todos los accesos de navegacion */}
//       <Routes>

//         <Route path="/" element={ <Home /> } />
//         <Route path="/timer" element={ <TimerControl /> } />
//         <Route path="/profile-list" element={ <ProfileList /> } />
//         <Route path="/profile/:name/:pet" element={ <Profile /> } />


//         {/* 404  */}
//         <Route path="*" element={ <NotFound /> }/>

//       </Routes>

//     </div>
//   );
// }

function App() {
  return (
    <div className="App">

      <h1>Mi pagina guay de Pokemons!</h1>

      <PokemonNav />

      <PokemonProfile />

    </div>
  );
}

export default App;
