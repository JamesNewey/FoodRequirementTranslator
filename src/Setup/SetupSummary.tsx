import React from 'react';
import { Link } from 'react-router-dom';

import { IUser } from '../common';

interface ISetupSummaryProps {
    user:IUser;
    setupComplete:any;
  }

export default function SetupSummary(props:ISetupSummaryProps)
{
    const { user, setupComplete } = props;

    const allergiesList: string = user.allergies.join(', ');

    const conditionsList: string = user.intolerances.conditions.join(', ');

    function doneClicked()
    {
      setupComplete();
    }

    return (
      <>
        <div className="container flex flex-col items-center my-5">
            Allergies: {allergiesList}
            <Link to="/setup/allergies">
              <button className="btn btn-blue">Add allergies</button>
            </Link>
        </div>
        <div className="container flex flex-col items-center my-5">
            Intolerances: {conditionsList}
            <Link to="/setup/intolerances">
              <button className="btn btn-blue">Add intolerances</button>
            </Link>
        </div>
        <div className="container flex flex-col items-center mt-10">
          <button className="btn btn-blue" onClick={() => doneClicked()}>Done</button>
        </div>
      </>
    )
}