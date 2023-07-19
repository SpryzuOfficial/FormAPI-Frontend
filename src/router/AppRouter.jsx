import { Navigate, Route, Routes } from 'react-router-dom';
import { Token } from '../auth/Token';
import { Entries } from '../pages/Entries';
import { Entry } from '../pages/Entry';

export const AppRouter = () =>
{
    return (
        <Routes>
            <Route path="/token" element={ <Token /> } />
            <Route path="/entries" element={ <Entries /> } />
            <Route path="/entry" element={ <Entry /> } />
            <Route path="*" element={ <Navigate to="/token" /> } />
        </Routes>
    )
}