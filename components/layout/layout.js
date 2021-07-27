import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
export default function Layout({user,children}) {
    return (
        <>
      
        <Navbar user={user}/>
        {children}
        <Footer user={user}/>
      
        </>
    )
}