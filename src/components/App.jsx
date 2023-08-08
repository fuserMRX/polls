import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LeaderBoard from './Leaderboard';

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authedUser === null);

    React.useEffect(() => {
        dispatch(handleInitialData())
    }, [dispatch]);

    const store = useSelector((store) => store);
    console.log('STORE ==>', store);
    return (
        <div className='container'>
            {loading === true ? null : <LeaderBoard />}
        </div>
    )
}