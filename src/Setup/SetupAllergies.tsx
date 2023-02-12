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
      updatedList = [...allergies, allergy];
    } else {
      updatedList = [...allergies];
      updatedList.splice(updatedList.indexOf(allergy), 1);
    }
    setAllergies(updatedList);

  }

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    handleAllergyChange(event.target.checked, event.target.value);
  };

  return (
    <>
      <div className="container flex flex-col items-center my-5">
        <span>{t("chooseAllergies")}</span>
        <ul className="">
        {constants.allAllergies.map((item, index) => (
            <li key={index}>
              <div>
                <label>
                <input value={item} type="checkbox" onChange={handleCheck} defaultChecked={allergies.includes(item)} />
                <span>{t(item)}</span>
                </label>
              </div>
            </li>
        ))}
      </ul>
      </div>
      <div className="container flex flex-col items-center my-5 md:flex-row md:space-x-2">
        <button className="btn btn-blue" onClick={() => { user.allergies = allergies; updateUserProgress(user); navigate("/setup")}}>Okay</button>
        <button className="btn btn-blue" onClick={() => navigate("/setup")}>Cancel</button>
      </div>
    </>
  );
}