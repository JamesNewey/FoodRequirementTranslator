import React, { useContext, useState } from 'react';
import { Routes, Route, Link, Outlet, useNavigate, useMatch } from 'react-router-dom';

import { UserContext } from './UserContext';
import IProfile from './common';

import SetupLang from './SetupLang';
import SetupAllergies from './setupAllergies';

import * as constants from './constants';

export default function Setup()
{
    const navigate = useNavigate();

    const [wizPos, setWizPos] = useState(1);

    const urls: string[] = ['', 'allergies'];//['', 'setupId', 'setupAllInt', 'setupAllergies', 'setupIntolerances'];

    const [allergies, setAllergies] = useState<string[]>([]);

    //let { path, url } = useMatch();

    const { updateUser } = useContext(UserContext);

    function handleAllergyChange(add:boolean, allergy:string)
    {
      let updatedList:string[] = [];
      if (add) {
        updatedList = [...allergies, allergy];
      } else {
        updatedList = [...allergies];
        updatedList.splice(updatedList.indexOf(allergy), 1);
      }
      setAllergies(updatedList);
    }

    // TODO: Refactor setup away from wizard into three options, with sub-edit pages

    return (
        <div>
            <Routes>
                <Route path='/' element={<SetupLang/>} />
                <Route path={'/allergies'} element={<SetupAllergies allergies={constants.allAllergies} handleChange={handleAllergyChange}/>} />
            </Routes>
            <Outlet />
            <h1 className="text-2xl font-bold underline">hello</h1>
            <button onClick={() => updateUser({allergies: ['nuts'], intolerances:[]})}>Continue</button>
        </div>
    )
}