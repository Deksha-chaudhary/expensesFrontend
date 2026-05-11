import { Link } from "react-router-dom";
import { APP_ROUTE } from "../utils/constant";

const Header = () => {

  const navigateLink=[
    {label:"Home",value:APP_ROUTE.home},
    {label:"About",value:APP_ROUTE.home},
    {label:"Expenses",value:APP_ROUTE.home},
  ]
  const loginSignupBtn=[
    {label:"signup",value:APP_ROUTE.signup},
    {label:"login",value:APP_ROUTE.login},
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <h1 className="text-xl font-bold text-gray-800">
            DummyLogo
          </h1>
        </div>

        
        <nav className="hidden md:flex items-center gap-8">
          {navigateLink.map((link)=>{
            return <Link
            key={link.value}
            to={link.value}
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            {link.label}
          </Link>
          })}
        </nav>

       
        <div className="flex items-center gap-3">
          {
            loginSignupBtn.map((item)=>{
              return <Link
              key={item.value}
              to={item.value}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            {item.label}
          </Link>
            })
          }
        </div>
      </div>
    </header>
  );
};

export default Header;