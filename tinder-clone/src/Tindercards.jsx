import React, { useState , useEffect} from 'react'
import './tindercards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios.js'

function Tindercards() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            // console.log(req.data)
            setPeople(req.data);
        }
        fetchData();
    }, [])
    const swiped = (direction, nametodelete)=>{
         console.log("removed " + nametodelete)
    }
    const outofframe = (name)=>{
        console.log(name + " left the screen")
    }
    return (
        <div className="tindercards">
            <div className="cardcontainer">
                {people.map((person) => (
                    <TinderCard 
                    className="swipe"
                    key ={person._id}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir)=> swiped(dir,person.name)}
                    onCardLeftScreen={() => outofframe(person.name)}>
                        <div style= {{backgroundImage: `url(${person.imgurl})`}}
                        className="card">
                        <h3 >{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Tindercards 
