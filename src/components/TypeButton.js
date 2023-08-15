import React from "react";

export default function TypeButton ({category}){
    return (
        <button className='rounded-2xl px-4 py-1 border border-sk-blue hover:bg-sk-blue'>
        {category}
      </button>
    );
}