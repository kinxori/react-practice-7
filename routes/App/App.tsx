import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Button from '../../components/buttons/Button'
import './App.css'


export const loader = async()=>{
  const episode1 = await ((await fetch("https://rickandmortyapi.com/api/episode/1")).json());
  const episode2 = await ((await fetch("https://rickandmortyapi.com/api/episode/2")).json());
  const episode3 = await ((await fetch("https://rickandmortyapi.com/api/episode/3")).json());

  return {episode1, episode2, episode3}
}

function App() {

  const {episode1, episode2, episode3}: any= useLoaderData()

  return (
      <div className="App" style={{display: "flex", flexDirection: "column", gap:50, }}>
        <Link to="/">
          <button style={{fontSize: 16, margin: 5, backgroundColor: "#111", border: "none"}}>
            Back Home
          </button>
        </Link>
        <div style={{margin: 0}}>
            <Button to="/episode1" style={{fontSize: 20, margin: 5, backgroundColor: "teal", border: "none"}}>
              Episode: {episode1.name}
            </Button> <br/>
            <br/>
            <Button to="/episode2" style={{fontSize: 20, margin: 5, backgroundColor: "teal", border: "none"}}>
              Episode: {episode2.name}
            </Button> <br/>
            <br/>
            <Button to="/episode3" style={{fontSize: 20, margin: 5, backgroundColor: "teal", border: "none"}}>
              Episode: {episode3.name}
            </Button> <br/>
            <br/>
        </div>
        <Outlet/>
      </div>
  )
}

export default App
