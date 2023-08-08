import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaderBoard from './Leaderboard';
import Dashboard from './Dashboard';
import AddPoll from './AddPoll';
import Poll from './Poll';
import Nav from './Nav';

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authedUser === null);

    React.useEffect(() => {
        dispatch(handleInitialData())
    }, [dispatch]);

    const store = useSelector((store) => store);
    console.log('STORE ==>', store);
    return (
        <Router>
            <div className='container'>
                <Nav />
                {loading === true ? null :
                    <Routes>
                        <Route path='/' exact element={<Dashboard />}/>
                        <Route path='/leaderboard' element={<LeaderBoard />}/>
                        <Route path='/polls/:id' exact element={<Poll />}/>
                        <Route path='/add' element={<AddPoll />}/>
                    </Routes>
                }
            </div>
        </Router>
    )
}