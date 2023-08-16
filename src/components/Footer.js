import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function () {
    return (
        <section className=" bg-foooter-grey mt-20 pt-16">
            <div className="xl:mx-20 mx-8 pb-52">
                <div className="relative mx-auto w-full lg:w-4/5 flex flex-col lg:flex-row  xl:gap-64 gap-24">
                    <div>
                        <img className="w-36" src="https://inros.gbjsolution.com/content/images/2021/12/dark-theme-logo.svg" />
                        <p className="mt-4 w-full md:w-96">
                            Inros is a modern classic blog theme for Ghost.
                            Use this theme for company blog, magazine,
                            niche or personal blog.
                        </p>
                        <ul className=" mt-4 flex flex-row gap-4">
                            <li><a><TwitterIcon /></a></li>
                            <li><a><FacebookIcon /></a></li>
                            <li><a><InstagramIcon /></a></li>
                            <li><a><GitHubIcon /></a></li>
                        </ul>
                    </div>
                    <div className="gap-6 md:gap-24 xl:gap-48 grid grid-cols-2 md:grid-cols-3">
                        <ul className="space-y-5">
                            <li className="font-light text-text-light">Features</li>
                            <li>Elements</li>
                            <li>Tags</li>
                            <li>Authors</li>
                            <li>404 page</li>
                        </ul>
                        <ul className="space-y-5">
                            <li className="font-light text-text-light">Members</li>
                            <li>Membership</li>
                            <li>Sign in</li>
                            <li>Sign up</li>
                            <li>Account</li>
                        </ul>
                        <ul className="space-y-5">
                            <li className="font-light text-text-light">About</li>
                            <li>Tag page</li>
                            <li>Author Page</li>
                            <li>Contact</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <p className="text-sm font-[400] absolute bottom-[-7rem]">© 2023 Inros - All right Reserved. Published with hands</p>
                </div>
            </div>
        </section>
    );
}