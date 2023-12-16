import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*** CSS Imports ***/
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

/*** Redux Imports ***/
import { store } from 'app/store';
import { Provider } from 'react-redux';

/*** Context Provider Imports ***/
import { SidebarContextProvider } from 'contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SidebarContextProvider>
                <App />
            </SidebarContextProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
