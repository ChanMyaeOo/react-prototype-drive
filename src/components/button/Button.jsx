import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../reducer/userReducer';

const clientId = '220371405993-u9bqg2o63e3c6eih6abng8jgitqs0303.apps.googleusercontent.com';


function Button() {
    const [state, dispatch] = useStateValue();

    const onSuccess = (res) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: res.profileObj
        })
        console.log('[Login Success] currentUser: ', res.profileObj)
    }

    const onFailure = (res) => {
        console.log('[Login failed] res ', res);
    }

    return (
        <div>
            <GoogleLogin 
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
            />
        </div>
    )
}

export default Button;
