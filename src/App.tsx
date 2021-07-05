import { useState } from "react";

interface Dog {
  message: string;
  status: string
}

function App() {
  const [image, setImage] = useState<Dog[]>([]);
  // const [gallery,setGallery] = useState<string[]>([])

  // const handleGetJoke = async () => {
  //   const response = await fetch(
  //     "https://official-joke-api.appspot.com/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  const handleGetImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Dog) => setImage((gallery) => [...gallery,jsonBody]))
  };

  // take message from each image and add to array
  // const handleGetGallery = () => {
  //   setGallery((prevStoredGal: string[]) => [...prevStoredGal,image?.message])
  // }
  console.log(image)
  if (image) {
    return (
      <div>
        <h1>Dog app</h1>
        {image.map((galleryArr,index) => (
          <img key= {index}
              src = {galleryArr.message}
              />
        ))}        
        <hr />
        <button onClick={handleGetImage}>Get another image</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog from an API!
        </p>
        <button onClick={handleGetImage}>Show a Dog</button>
      </div>
    );
  }
}

export default App;
