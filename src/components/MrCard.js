import React from "react";
import TypeButton from "./TypeButton";
import PublisherCard from "./PublisherCard";

export default function MrCard ({type,title, text,auth}){
    return (
        <div className="space-y-3">
            <img className="rounded-2xl" src="https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-5.jpg"/>
            <TypeButton category={'Nature'}/>
            <h1 className="text-3xl">Autumn is a second spring when every leaf is a flower</h1>
            <p>
            She then expatiated very warmly upon the advantages I should reap from her plan;
             talked in a high style of my future grandeur;
              assured me how heartily I should
            </p>
            <PublisherCard />
        </div>
    );
}