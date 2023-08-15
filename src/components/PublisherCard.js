import React from "react";

export default function PublisherCard({ publisher }) {
    return (
        <div className="w-max flex flex-row gap-2 items-center">
            <img className="w-12 rounded-full" src="https://www.gravatar.com/avatar/021e64775176cc4c7018e5e867f17de2?s=250&d=mm&r=x" />
            <div className="">
                <span className="text-sm ">Vil Mal Shar</span>
                <br />
                <span className="text-sm font-light text-border-grey-400">
                    March 02. 2021 . 3 min read
                </span>
            </div>
        </div>
    );
}