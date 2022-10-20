import React from 'react';

export default function SetupAllInt()
{
    return (
        <div>
            <label htmlFor="identity">Please specify if you have an allergy, an intolerance, or both</label>
            <input type="checkbox" id="allergy" name="allergy" value="true" />
            <label htmlFor="allergy"> I have an allergy</label><br />
            <input type="checkbox" id="intolerance" name="intolerance" value="true" />
            <label htmlFor="intolerance"> I have an intolerance</label>
        </div>
    )
}