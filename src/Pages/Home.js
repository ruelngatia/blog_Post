import React from "react";
import MiniSideCard from "../components/MiniSideCard";
import MrCard from "../components/MrCard";

export default function Home() {
  return (
    <div className="md:mx-20 mx-5 ">
      <section className="my-16  flex justify-center">
        <div className="md:max-w-5xl w-10/12 text-center">
          <h1 className="md:text-6xl text-3xl">
            In depth resource on UI, UX and everything in between.
          </h1>
          <h3 className="md:text-2xl text-lg mt-3 font-medium">
            Inros is a modern classic blog theme for Ghost. Use this theme for
            company blog, magazine, niche or personal blog.
          </h3>
        </div>
      </section>

      <section className="md:w-full">
        <h1 className="lg:ml-32 text-2xl mb-4">Featured Post</h1>
        <div className="md:mx-auto xl:w-4/5 flex flex-col lg:flex-row gap-6">
          <div className="flex-auto lg:w-2/4 xl:w-3/5 space-x-2 space-y-3">
            <img src="https://inros.gbjsolution.com/content/images/size/w1200/2021/09/image-2.jpg" className="rounded-lg w-full" />
            <button className="rounded-3xl mt-2 px-5 py-1 border border-sk-blue hover:bg-sk-blue">
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
              <img className="w-12 rounded-full" src="https://www.gravatar.com/avatar/021e64775176cc4c7018e5e867f17de2?s=250&d=mm&r=x" />
              <div className="">
                <span className="text-sm ">Vil Mal Shar</span>
                <br />
                <span className="text-sm font-light text-border-grey-400">
                  March 02. 2021 . 3 min read
                </span>
              </div>
            </div>
          </div>
          <div className="flex-auto xl:w-1/3 lg:w-2/4 space-y-8">
            <MiniSideCard category='Health' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-11.jpg'/>
            <MiniSideCard category='Technology' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-4.jpg'/>
            <MiniSideCard category='Health' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-16.jpg'/>
            <MiniSideCard category='Health' title='The mind and body are not separate. what affects one, affects the other' 
                img='https://inros.gbjsolution.com/content/images/size/w600/2021/09/image-12.jpg'/>
          </div>
        </div>
      </section>

      <section className="mt-32 ">
        <div className="md:mx-auto xl:w-4/5 gap-5 grid xl:grid-cols-3 md:grid-cols-2 grid-col-1">
          <MrCard/>
          <MrCard/>
          <MrCard/>
          <MrCard/>
          <MrCard/>
          <MrCard/>
          <MrCard/> 
        </div>
        <div className=" mt-16 flex justify-center">
          <button className=" rounded-[40px] text-xl
            bg-light-blue px-6 py-4 ">Show more post</button>
        </div>
      </section>

      <section className="mt-16">
        <div className=" rounded-2xl md:mx-auto md:px-14 px-6 py-8 xl:w-4/5 border-[6px] border-light-blue flex md:gap-4 flex-col xl:flex-row justify-between xl:items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl ">Subscribe to Inros</h1>
            <p className="text-xl">Get all the latest posts delivered straight to your inbox.</p>
          </div>
          <div className=" md:space-y-0 md:space-x-16 flex flex-col md:flex-row items-center gap-2">
            <input className=" w-full xl:w-max border rounded-3xl border-border-grey bg-hovr-d-blue pl-3 h-14 text-lg" placeholder="Your name"/>
            <input className=" w-full xl:w-max border rounded-3xl border-border-grey bg-hovr-d-blue pl-3 h-14 text-lg" placeholder="Your email address"/>
          </div>
          <button className="bg-light-blue px-6 py-3 text-xl rounded-3xl xl:w-min w-full mt-3 md:mt-0">Subscribe</button>
        </div>
      </section>

    </div>
  );
}
