import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

interface ISetupAllergiesProps {
  allergies:string[];
  handleChange:any;
}

export default function SetupAllergies(props:ISetupAllergiesProps)
{
  const { t } = useTranslation();

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(event.target.checked, event.target.value);
  };

  return (
      <div className="checkList">
        {props.allergies.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span>{t(item)}</span>
          </div>
        ))}
      </div>
    );
}