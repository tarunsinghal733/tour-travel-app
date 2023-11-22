import React from 'react'
import Tripdata from "./Tripdata"
import trip1 from "../../assets/5.jpg"
import trip2 from "../../assets/6.jpg"
import trip3 from "../../assets/3.jpg"
import "../Trip/trip.css"

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trip</h1>
            <p>You can discover unique destinations using google Maps.</p>
            <div className='tripcard'>
                <Tripdata
                    image={trip1}
                    heading="Trip in Indonesia"
                    text="Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes (Sulawesi); the Lesser Sunda Islands (Nusa Tenggara) of Bali and a chain of islands that runs eastward through Timor; the Moluccas (Maluku) between Celebes and the island of New Guinea; and the western extent of New Guinea (generally known as Papua). " />
                <Tripdata
                    image={trip2}
                    heading="Trip in Malaysia"
                    text="Greece has a fascinating and interesting past. However, it’s not all about crumbling ruins and ancient architecture. Across Greece and the Greek islands are monuments dating from all periods. So, from the ancient ruins in Athens to the iconic blue domes in Santorini, here are some of the most famous monuments in Greece." />
                <Tripdata
                    image={trip3}
                    heading="Trip in Paris"
                    text="Paris is known for its gorgeous, imposing monuments. These iconic structures, often an exemplar of a particular era in architecture, are one of the city’s instantly recognizable elements.

                    The preeminent of Paris’s landmarks is the Eiffel Tower. This skyscraping wrought-iron needle became the world’s tallest building when it was unveiled at the 1889 Paris World’s Fair. Today, its summit remains the City of Light’s highest point.
                    
                    Ascend to the top of the tower, feel the breeze, and explore Gustave Eiffel’s wood-paneled office-eyrie. Then revive yourself with a chilled glass of Veuve Clicquot at what must be a contender for the world’s highest Champagne Bar." />

            </div>
        </div>
    )
}

export default Trip