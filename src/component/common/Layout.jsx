import Header from "../Header"

const Layout = ( props) => {
  console.log("_props",props.typehshsh)
  return (
    <div className="min-h-screen">
      
      <Header />
      <main>{props.children}</main>
         <Header />
    </div>
  )
}

export default Layout
