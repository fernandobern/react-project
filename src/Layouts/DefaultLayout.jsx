import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Outlet/> {/*Conteúdo a ser exibido - isso só é usado por causa do react router*/}
    </>
  )
}

export default DefaultLayout
