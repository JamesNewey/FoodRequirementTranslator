import React, { useState } from 'react';
import { Routes, Route, Link, Outlet, useNavigate, useMatch } from 'react-router-dom';

import IProfile from './common';

import SetupLang from './setupLang';
import SetupAllergies from './setupAllergies';

import * as constants from './constants';

export default function Setup()
{
    const navigate = useNavigate();

    const [wizPos, setWizPos] = useState(1);

    const urls: string[] = ['', 'allergies'];//['', 'setupId', 'setupAllInt', 'setupAllergies', 'setupIntolerances'];

    const [allergies, setAllergies] = useState<string[]>([]);

    //let { path, url } = useMatch();

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

    function handleClick() {
        setWizPos(wizPos + 1);
        if(wizPos<2)
        {
          navigate(urls[wizPos]);
        }
        else
        {
          let userProfile:IProfile = {
            allergies: allergies,
            intolerances: []
          };
          localStorage.user = JSON.stringify(userProfile);
          navigate('/translate');
        }
    }

    return (
        <div>
            <Routes>
                <Route path='/' element={<SetupLang/>} />
                <Route path={'/allergies'} element={<SetupAllergies allergies={constants.allAllergies} handleChange={handleAllergyChange}/>} />
            </Routes>
            <Outlet />
            <button onClick={handleClick}>Continue</button>
        </div>
    )
}