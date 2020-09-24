import React from 'react';
import { GoogleLogout } from 'react-google-login';

import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../reducer/userReducer';
const clientId= '220371405993-u9bqg2o63e3c6eih6abng8jgitqs0303.apps.googleusercontent.com';


function Logout() {
    const [state, dispatch] = useStateValue();
    const onSuccess = () => {
        dispatch({
            type: actionTypes.SET_USER,
            user: null
        })
        alert('Logout made successfully')
        // console.log('LOgout made successfully');
    }
    return (
        <div>
            <GoogleLogout 
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout
