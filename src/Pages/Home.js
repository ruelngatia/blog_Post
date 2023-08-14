import React from "react";
import p1 from "../assets/image-2.jpg";
import MiniSideCard from "../components/MiniSideCard";

export default function Home() {
  return (
    <div className="md:mx-20 mx-10">
      <section className="my-16  flex justify-center">
        <div className="md:max-w-5xl w-10/12 text-center">
          <h1 className="md:text-7xl text-3xl">
            In depth resource on UI, UX and everything in between.
          </h1>
          <h3 className="md:text-2xl text-lg mt-3">
            Inros is a modern classic blog theme for Ghost. Use this theme for
            company blog, magazine, niche or personal blog.
          </h3>
        </div>
      </section>

      <section className="">
        <h1 className="lg:ml-32 text-xl mb-4">Featured Post</h1>
        <div className="mx-auto md:w-4/5 flex flex-col lg:flex-row gap-6">
          <div className="flex-auto lg:w-3/5 space-x-2 space-y-3">
            <img src={p1} className="rounded-lg w-full" />
            <button className="rounded-2xl mt-2 px-4 py-2 border border-sk-blue hover:bg-sk-blue">
              Lifestyle
            </button>
            <h2 className="hover:underline text-2xl">
              Self-observation is the first step of inner unfolding
            </h2>
            <p className="mt-2">
              Almost instantly the whole truth of the transaction seemed to rush
              upon her mind, and her wrath was inconceivably violent. She asked
              me a thousand questions in a breath; but, fortunately, was too
              vehement to attend to my embarrassment, which must otherwise have
              betrayed my knowledge of
            </p>
            <div className="w-max flex flex-row gap-2 items-center">
              <img className="w-16 rounded-full" src="https://www.gravatar.com/avatar/021e64775176cc4c7018e5e867f17de2?s=250&d=mm&r=x" />
              <div className="">
                <span className="text-sm ">Vil Mal Shar</span>
                <br />
                <span className="text-sm font-light text-border-grey-400">
                  March 02. 2021 . 3 min read
                </span>
              </div>
            </div>
          </div>
          <div className="flex-auto lg:w-2/5 space-y-3">
            <MiniSideCard category='Health' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-11.jpg'/>
            <MiniSideCard category='Technology' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-4.jpg'/>
            <MiniSideCard category='Health' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-16.jpg'/>
            {/* <MiniSideCard category='Health' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-12.jpg'/> */}
          </div>
        </div>
      </section>
    </div>
  );
}
