import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IProfile from './common';
import * as constants from './constants';

export default function Translate()
{
    const { t } = useTranslation();

    const user:IProfile = JSON.parse(localStorage.user);

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
      };

    const [language, setLanguage] = useState('el');

    const langTarget = { lng: language };

    return (
        <>
            <div>
                <label htmlFor="targetLang">{t('targetLang')}:</label>
                <select id="targetLang" onChange={handleChange} defaultValue={language} >
                    {constants.supportedTargetLanguages.map((item, index) => (
                        <option key={index} value={item}>{t('lang_'+item)}</option>
                    ))}
                </select>
            </div>
            <br/>
            <div>
            {user.allergies != null && (
                <div style={{fontSize:"200%"}}>
                    <div>{t("allergyIntro", langTarget)}:</div>
                    {user.allergies.map((allergy:string) => (
                        <div>{t(allergy, langTarget)}</div>
                    ))}
                </div>
            )}
            </div>
        </>
    )
}