import React from 'react'
import Tripdata from "./Tripdata"
import trip1 from "../../assets/5.jpg"
import trip2 from "../../assets/10.jpg"
import trip3 from "../../assets/8.jpg"
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
                    text="Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes (Sulawesi); the Lesser Sunda Islands (Nusa Tenggara) of Bali and a chain of islands that runs eastward through Timor; the Moluccas (Maluku) between Celebes and the island of New Guinea; and the western extent of New Guinea (generally known as Papua). " />
             <Tripdata
                    image={trip3}
                    heading="Trip in Paris"
                    text="Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes (Sulawesi); the Lesser Sunda Islands (Nusa Tenggara) of Bali and a chain of islands that runs eastward through Timor; the Moluccas (Maluku) between Celebes and the island of New Guinea; and the western extent of New Guinea (generally known as Papua). " />
            
            </div>
        </div>
    )
}

export default Trip