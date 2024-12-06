import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { APP_ROUTES } from '../constant'
import {
    Home,
} from '../pages'
import AppLayout from '../components/AppLayout/AppLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={APP_ROUTES.ROOT} element={<AppLayout />}>
        <Route path={APP_ROUTES.ROOT} element={<Home />} />
      </Route>
    </Route>
  )
)

const AppRoutes = () => {
  return <RouterProvider router={router} />
}
export default AppRoutes