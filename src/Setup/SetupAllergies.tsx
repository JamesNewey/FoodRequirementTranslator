import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as constants from '../constants';
import { IUser } from '../common';

interface ISetupAllergiesProps {
  user:IUser;
  updateUserProgress:any;
}

export default function SetupAllergies(props:ISetupAllergiesProps)
{
  const { t } = useTranslation();

  const navigate = useNavigate();

  let { user, updateUserProgress } = props;

  const [allergies, setAllergies] = useState<string[]>(user.allergies);

  function handleAllergyChange(add:boolean, allergy:string)
  {
    let updatedList:string[] = [];
    if (add) {
      updatedList = [...user.allergies, allergy];
    } else {
      updatedList = [...user.allergies];
      updatedList.splice(updatedList.indexOf(allergy), 1);
      user.allergies = updatedList;
    }
    setAllergies(updatedList);

  }

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    handleAllergyChange(event.target.checked, event.target.value);
  };

  return (
    <>
      <div className="checkList">
        {constants.allAllergies.map((item, index) => (
          <div key={index}>
            <label>
            <input value={item} type="checkbox" onChange={handleCheck} defaultChecked={allergies.includes(item)} />
            <span>{t(item)}</span>
            </label>
          </div>
        ))}
      </div>
      <button onClick={() => { user.allergies = allergies; updateUserProgress(user); navigate("/setup")}}>Okay</button>
      <button onClick={() => navigate("/setup")}>Cancel</button>
    </>
  );
}