import React from 'react';
import Logout from '../logout/Logout';
import { useStateValue } from '../../context/StateProvider';
import Button from '../button/Button';

function Home() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div>
            {
                user ? (
                    <div>
                        <h1>HOME</h1>
                        <Logout />
                    </div>
                ) : (
                    <Button />
                )
            }
           
        </div>
    )
}

export default Home
