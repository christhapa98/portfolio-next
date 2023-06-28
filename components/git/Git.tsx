import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
    return (
        <div id="about" className="flex items-center justify-center h-screen p-40 bg-gradient-to-r from-indigo-500 to-purple-500">
            <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-2xl">
                <h1 className="mt-5 text-5xl project-heading" style={{ paddingBottom: "20px" }}>
                    Days I <strong className="purple">Enjoy Coding </strong>
                </h1>
                <GitHubCalendar
                    username="riddhasoftchris"
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
