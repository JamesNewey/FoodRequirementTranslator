import React from 'react';
import { Link } from 'react-router-dom';

import { IUser } from '../common';

interface ISetupSummaryProps {
    user:IUser;
  }

export default function SetupSummary(props:ISetupSummaryProps)
{
    const { user } = props;

    const allergiesList: string = user.allergies.join(', ')

    return (
        <div>
            Allergies: {allergiesList}
            <Link to="/setup/allergies">
              <button>Add allergies</button>
            </Link>
        </div>
    )
}