import React from 'react';
import { useTranslation } from 'react-i18next';
import * as constants from './constants';
import i18next from 'i18next';

export default function SetupLang()
{
    const { t } = useTranslation();

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        // props.handleChange(event.target.checked, event.target.value);
        i18next.changeLanguage(event.target.value).then((t) => {
            console.log(t);
        });
      };
    
    return (
        <div>
            <label htmlFor="nativeLang">{t('chooseLang')}:</label>
            <select id="nativeLang" onChange={handleChange}>
            {constants.supportedBaseLanguages.map((item, index) => (
                <option key={index} value={item}>{t('lang_'+item)}</option>
            ))}
            </select>
        </div>
    )
}