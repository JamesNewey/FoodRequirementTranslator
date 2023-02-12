import React, { useContext, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { UserContext } from '../UserContext';
import { IUser } from '../common';
import Layout from '../Layout';

import SetupSummary from './SetupSummary'
import SetupAllergies from './SetupAllergies';
import SetupIntolerances from './SetupIntolerances';

export default function Setup()
{
    // The storage-backed global user
    const { user, updateUser } = useContext(UserContext);

    // The in-progress user that will be committed to the above upon completion of setup
    let [setupUser, setSetupUser] = useState(user);

    const navigate = useNavigate();

    function updateUserProgress(updatedUser: IUser)
    {
      setSetupUser(updatedUser);
    }

    function setupComplete()
    {
        let newUser = JSON.parse(JSON.stringify(setupUser));
        updateUser(newUser);
        navigate("/translate");
    }

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<SetupSummary user={user} setupComplete={setupComplete} />} />
                <Route path={'/allergies'} element={<SetupAllergies user={user} updateUserProgress={updateUserProgress}/>} />
                <Route path={'/intolerances'} element={<SetupIntolerances user={user} updateUserProgress={updateUserProgress}/>} />
            </Routes>
        </Layout>
    )
}