import React, {FC} from 'react';

import MoviesPage from "./pages/MoviesPage/MoviesPage";
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MovieListCard from "./components/MoviesListCard /MovieListCard";
import Registration from "./components/User/Registration/Registration";
import Login from "./components/User/Login/Login";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movies/1'}/>}/>
                    <Route path={'movies/:id'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id/details'} element={<MovieListCard/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'registration'} element={<Registration/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
