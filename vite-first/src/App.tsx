import { useState, useEffect } from "react"
export function App(){

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/name/colombia')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    // const countryName = () => {
    //     return fetch(`https://restcountries.com/v3.1/name/colombia`)
    //     .then(res => res.json())
    //     .catch(err => console.error(err))
    // }
    return (
        <main className="container">
            <h1>Busqueda de pais</h1>
            <div className="header">
                <label>
                    <input type="text" placeholder="Introducir nombre" />
                    <small>Ejemplo: Colombia</small>
                </label>
            </div>
            <div className="result">
                {data?(
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </main>

        

    )

}