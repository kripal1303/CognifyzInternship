import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-2wcjq72i4jkz7x7d.us.auth0.com"
        clientId="OQmqeVhqayT6hrJvHgFYl0BuTP6YybBs"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>,
);