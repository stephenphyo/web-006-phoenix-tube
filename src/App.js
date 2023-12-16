import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

/*** CSS Imports ***/
import './App.css';

/*** Layout Import ***/
import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/AuthLayout';

/*** Page Imports ***/
import Home from 'pages/Home';
import Login from 'pages/Login';

import Counter from 'pages/Counter';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLayout><Home /></MainLayout>} />
                <Route path='/auth/login' element={<AuthLayout><Login /></AuthLayout>} />
                <Route path='/counter' element={<MainLayout><Counter /></MainLayout>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Router>
    );
}

export default App;