import { useState, useEffect } from "react";


function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    async function fetchData() {
        setIsLoaded(true)
        try {
            const response = await fetch(`http://localhost:3000/user/12`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setData(data)
            }
        } catch (error) {
            console.log(error.message)
            setError(true)
        }
        finally {
            setIsLoaded(true)
        }
      }
    
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetchData()
    }, [])
  
    if (error) {
      return <p>Echec chargement</p>;
    } else if (!isLoaded) {
      return <p>Chargement...</p>;
    } else {
      return (
          <p>{data.id}</p>
      );
    }
}
  
export default MyComponent