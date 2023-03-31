import { useEffect, useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import Button from '../components/buttons/Button'
import Details from './Details'



export default function Button3(){

    const {episode3}:any = useLoaderData()
    const [characters, setCharacters] = useState([])
    console.log(episode3)

    useEffect(()=>{
        async function fetchData() {
            const charactersPromises = episode3.characters.map(async(url:any)=>{
                const response = await fetch(url)
                return response.json()
            })
            const characterData:any = await Promise.all(charactersPromises)
            setCharacters(characterData)
        }
        fetchData()
    },[])

        // console.log(characters)

    const location = useLocation()
    const [isActive, setIsActive] = useState("")
      
    const handleClick = ()=>{
        setIsActive("/episode3/details")
    }

    return(
        <>
            <div>
                <h2>
                    Name: {episode3.name}
                </h2>
                <Button to="/episode3/details" onClick={handleClick} style={{fontSize: 16, margin: 5, backgroundColor: "#111", border: "none"}}>
                   More Details
                </Button>
                {isActive === location.pathname && 
                <Details>
                    <div style={{fontSize: 26, margin: 40, display:"block", flexDirection: "column",}}>
                        
                        <p>
                            Air Date: {episode3.air_date}
                        </p>
                        <p>
                            Number: {episode3.episode}
                        </p>
                    </div>
                    <hr style={{width:300}} />
                    <h2>Characters</h2>
                    <div style={{display:"flex", flexWrap:"wrap", width: 600, background: "teal", justifyContent: "center", margin: "0px auto", border: "3px solid White", borderRadius: 10}}>
                            {characters.map((char:any)=>(
                            <div key={char.id} >
                                <p>{char.name}</p>
                                <img src={char.image} alt={char.name} style={{height:100,}}/>
                                <hr style={{width:130}} />
                            </div>
                            ))}
                    </div>
                </Details>}
            </div>
        </>
    )
}