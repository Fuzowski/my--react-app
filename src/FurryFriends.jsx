import{useState} from "react";

function App () {
    const [furryFriends , setFriends] = useState([
        {id: 1, name: "Tracey", species: "Dog"},
        {id: 2, name: "Chelby", species: "cat"},
        {id: 3, name: "Blake" , species: "shark"}
    ]);

    const [featuredFriends, setFeaturedFriend] = useState(null);

    const selectFeatured = (friend) => {
        setFeaturedFriend(friend);
    }

    return (
        <div>
            <h2>Furry Friends</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}
                    onDoubleClick={() => selectFeatured(friend)}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: setFeaturedFriend === friend ? '#f0f0f0' : 'transparent' 
                    }}>
                        {friend.name} - {friend.species}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

