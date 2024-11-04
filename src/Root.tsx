import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { TabletsPage } from './pages/TabletsPage';
import { PhonePage } from './pages/PhonePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="phones">
          <Route index element={<PhonePage />} />
          <Route path=":itemId" element={<PhonePage />} />
        </Route>
        <Route path="tablets">
          <Route index element={<TabletsPage />} />
          <Route path=":itemId" element={<TabletsPage />} />
        </Route>
        <Route path="accessories">
          <Route index element={<AccessoriesPage />} />
          <Route path=":itemId" element={<AccessoriesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
