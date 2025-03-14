import{useState} from "react";

function FurryFriends() {
    const [friends , setFriends] = useState([
        {id: 1, name: "Tracey", species: "Dog"},
        {id: 2, name: "Chelby", species: "cat"},
        {id: 3, name: "Blake" , species: "shark"}
    ]);

    return (
        <div>
            <h2>Furry Friends</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>
                        {friend.name} - {friend.species}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FurryFriends

console.log("FurryFriends")