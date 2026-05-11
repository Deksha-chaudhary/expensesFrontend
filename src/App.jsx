import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { APP_ROUTE } from './utils/constant'

const Home = lazy(() => import('./component/page/Home'))
const Login = lazy(() => import('./component/page/Login'))
const Signup = lazy(() => import('./component/page/Signup'))
const ForgetPassword = lazy(() => import('./component/page/ForgetPassword'))
const ResetPassword = lazy(() => import('./component/page/ResetPassword'))

const PageLoader = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center text-gray-700">
    Loading...
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={APP_ROUTE.home} element={<Home />} />
          <Route path={APP_ROUTE.login} element={<Login />} />
          <Route path={APP_ROUTE.signup} element={<Signup />} />
          <Route path={APP_ROUTE.forgot} element={<ForgetPassword />} />
          <Route path={APP_ROUTE.resetPassword} element={<ResetPassword />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
