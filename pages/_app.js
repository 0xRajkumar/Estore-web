import '../styles/globals.css'

import Layout from '../components/layout/layout'
import {useState , useEffect} from 'react'
import {auth} from '../firebase'
function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(user)
      }else{
      
        setuser(null)}
    })

  } ,[])
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
