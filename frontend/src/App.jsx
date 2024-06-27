import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false)
        const response = await axios.get('/api/products')
        console.log(response.data);
        setProducts(response.data);
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    )()
  }, [])

  // const [products,error,loading] = customReactQuery('/api/products')

  if (error) {
    return <h2>something went wrong 😂 😂 😂</h2>
  }
  if (loading) {
    return <h2 className='loading'>Loading</h2>
  }
  return (
    <>
      <h1>API Handeling Consise Way {products.length}</h1>
      {
        products.map((product) => (
          <div key={product.id} className='main'>
            <div className='title'><h2>{product.name}</h2></div>
            <div className='img'><img src={product.Image} alt="Fetched from server" height={"300px"} width={"300px"}/></div>
          </div>
        ))
      }
    </>
  )
}

export default App

// const customReactQuery = (urlPath) =>{
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false)
//         const response = await axios.get('/api/products')
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }
//     }
//     )()
//   }, [])
//   return [products,error,loading]
// }