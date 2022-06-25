import {
  Route,
  Outlet,
  Routes,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';
import { HomePage } from '@/pages/home/HomePage';
import { UserPage } from '@/pages/user/UserPage';
import { Layout } from '@/components/layout/Layout';
import { NotFoundPage } from '@/pages/not-found/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<Navigate to="/" replace />} />
            <Route path=":username" element={<UserPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
