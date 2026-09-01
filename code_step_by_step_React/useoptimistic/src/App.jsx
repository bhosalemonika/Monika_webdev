import { useOptimistic, useState } from "react";

function App() {
  const [likes, setLikes] = useState(10);

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes) => currentLikes + 1
  );

  const handleLike = async () => {
    addOptimisticLike();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLikes(likes + 1);
  };

  return (
    <div>
      <h1>Likes: {optimisticLikes}</h1>

      <button onClick={handleLike}>
        Like ❤️
      </button>
    </div>
  );
}

export default App;