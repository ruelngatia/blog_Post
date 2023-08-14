import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function DropDown() {
  return (
    <div className='right-0 absolute rounded-xl p-4 border border-border-grey'>
        <ul className='flex flex-col w-max space-y-2'>
            <li>Features</li>
            <li>Elements</li>
            <li>Membership</li>
            <li>Tags</li>
            <li>Authors</li>
            <li>Monthly archive</li>
            <li>Monthly archive 2</li>
            <li>Yearly archive</li>
            <li>Yearly archive 2</li>
            <li>Contact</li>
            <li>Documentation</li>
            <li>Get theme</li>
            <li>Sign in</li>
            <li>
                <button className='rounded-xl bg-sk-blue px-3 py-1'>
                    Sign Up
                </button>
            </li>
            <li className='px-3'>
                <span><SearchIcon/></span>
                <span className='float-right'><LightModeIcon/></span>
            </li>
        </ul>
    </div>
  )
}
