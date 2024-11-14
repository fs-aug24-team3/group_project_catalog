import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './translation/i18';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Root />
  </Provider>,
);
