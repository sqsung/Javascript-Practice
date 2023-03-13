/* eslint-disable */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import TechPage from './components/TechPage';
import BlogPage from './components/BlogPage';
import ReactPage from './components/ReactPage';
import JavaScriptPage from './components/JavaScriptPage';
import ReactDocPage from './components/ReactDocPage';
import UserStore from './store/user';

function App() {
    return (
        <UserStore>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainPage />}></Route>
                    <Route path={'tech'} element={<TechPage />}>
                        <Route path={'javascript'} element={<JavaScriptPage />} /> 
                        <Route path={'react'} element={<ReactPage />}></Route>
                        <Route path='react/:postId' element={<ReactDocPage />} />
                    </Route>
                    <Route path={'/blog'} element={<BlogPage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserStore>

    );
}

export default App;