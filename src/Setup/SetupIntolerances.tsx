import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as constants from '../constants';
import { IUser } from '../common';

interface ISetupIntolerancesProps {
  user:IUser;
  updateUserProgress:any;
}

export default function SetupIntolerances(props:ISetupIntolerancesProps)
{
  const { t } = useTranslation();

  const navigate = useNavigate();

  let { user, updateUserProgress } = props;

  const [conditions, setConditions] = useState<string[]>(user.intolerances.conditions);

  function handleConditionChange(add:boolean, allergy:string)
  {
    let updatedList:string[] = [];
    if (add) {
      updatedList = [...user.intolerances.conditions, allergy];
    } else {
      updatedList = [...user.intolerances.conditions];
      updatedList.splice(updatedList.indexOf(allergy), 1);
      user.intolerances.conditions = updatedList;
    }
    setConditions(updatedList);

  }

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    handleConditionChange(event.target.checked, event.target.value);
  };

  return (
    <>
      <div className="checkList">
        {constants.allIntoleranceConditions.map((item, index) => (
          <div key={index}>
            <label>
            <input value={item} type="checkbox" onChange={handleCheck} defaultChecked={conditions.includes(item)} />
            <span>{t(item+'_conName')}</span>
            </label>
          </div>
        ))}
      </div>
      <button className="btn btn-blue" onClick={() => { user.intolerances.conditions = conditions; updateUserProgress(user); navigate("/setup")}}>Okay</button>
      <button className="btn btn-blue" onClick={() => navigate("/setup")}>Cancel</button>
    </>
  );
}