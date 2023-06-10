import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import 'react-grid-layout/css/styles.css';
import './styles/rodal.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="t31k.au.auth0.com"
    clientId="4pof3jweYglM0x0a66VfZPx84DMiO3yY"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
