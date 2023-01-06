import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Link, Outlet, useNavigate, useMatch } from 'react-router-dom';

import { UserContext } from '../UserContext';
import { IUser, defaultUser } from '../common';

import SetupSummary from './SetupSummary'
import SetupLang from './SetupLang';
import SetupAllergies from './SetupAllergies';

import * as constants from '../constants';

export default function Setup()
{
    const navigate = useNavigate();

    // The storage-backed global user
    const { user, updateUser } = useContext(UserContext);

    // The in-progress user that will be committed to the above upon completion of setup
    let [setupUser, setSetupUser] = useState(user);

    function updateUserProgress(updatedUser: IUser)
    {
      console.log('updateUserProgress');
      console.log(updatedUser);
      setSetupUser(updatedUser);
    }


    return (
        <div>
            <Routes>
                <Route path='/' element={<SetupSummary user={user} />} />
                <Route path='/lang' element={<SetupLang/>} />
                <Route path={'/allergies'} element={<SetupAllergies user={user} updateUserProgress={updateUserProgress}/>} />
            </Routes>
        </div>
    )
}