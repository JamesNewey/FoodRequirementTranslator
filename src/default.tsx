import React from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';

export default function Default()
{
    const showTranslate:boolean = localStorage.user != null;

    const translateCss:React.CSSProperties = showTranslate ? {} : { display: 'hidden'};

    return (
        <>
            <div>
                Welcome to Food Requirement Translator!
            </div>
            <div style={translateCss}> 
                <Link to={'/translate'}>Translate</Link>
            </div>
            <div >
                <Link to={'/setup'}>Setup</Link>
            </div>
        </>
    )
}