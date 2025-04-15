import { Outlet } from "react-router-dom"

function CleanLayout({ children }) {
    return (
      <main style={{ padding: '2rem' }}>
        <Outlet/> 
      </main>
    )
  }
  
  export default CleanLayout
  