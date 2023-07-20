import React from "react";
import GitHubCalendar from "react-github-calendar";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

const Github = () => {
    return (
        <div id="about" className="flex flex-col items-center justify-center h-screen gap-5 p-40 bg-gradient-to-r from-red-500 to-purple-500">
            <div className="flex gap-5 text-white">
                <Link href={"https://www.linkedin.com/in/chris-thapa-27535017a/"}>
                    <LinkedInIcon className="cursor-pointer hover:scale-110" />
                </Link>
                <Link href={"https://www.instagram.com/samirthapamagar_/"}>
                    <InstagramIcon className="cursor-pointer hover:scale-110" />
                </Link>
                <Link target="_blank" href={"https://github.com/christhapa98"}>
                    <GitHubIcon className="cursor-pointer hover:scale-110" />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-2xl">
                <h1 className="mt-5 text-5xl project-heading" style={{ paddingBottom: "20px" }}>
                    Days I <strong className="purple">Enjoy Coding </strong>
                </h1>
                <GitHubCalendar
                    username="christhapa98"
                    blockSize={15}
                    colorScheme="light"
                    blockMargin={5}
                    year={"last"}
                    fontSize={16}
                />
            </div>
        </div>
    );
}

export default Github;
