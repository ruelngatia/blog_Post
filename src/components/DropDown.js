import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function DropDown() {
  return (
    <div className='bg-hovr-d-blue right-0 absolute rounded-xl p-4 border border-border-grey'>
        <ul className='flex flex-col w-max space-y-2 text-lg'>
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
                <button className='rounded-2xl text-lg bg-sk-blue px-6 py-1'>
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
