import '../styles/globals.css'
import { wishContext } from '../WishContext'

import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/layout/layout'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState(null)
  const [wish, setwish] = useState([])
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(user)
      } else {
        setuser(null)
      }
    })
  }, [])
  useEffect(() => {
    const wishdata = localStorage.getItem("wish")
    
    if (!wishdata) {
      setwish([])
    } else {
      setwish(JSON.parse(wishdata))
    }
  }, [])
  useEffect(() => {
    const wishdata = localStorage.setItem("wish", JSON.stringify(wish))

   
  }, [wish])

  return (
    <>
      <wishContext.Provider value={{ wish, setwish }}>
        <Layout user={user}>
          <Component {...pageProps} user={user} />
        </Layout>
      </wishContext.Provider>
    </>
  )
}

export default MyApp
