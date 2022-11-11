import React from "react";
import PrimaryBtn from "./UI/PrimaryBtn";

function Discover() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center h-full text-primary-4 z-10">
            <div className="flex flex-col gap-2">
                <h2 className="text-h2 font-semibold">What's on your mind?</h2>
                <p className="text-center">
                    We will send you marketing promotions, special offers,
                    <br />
                    inspiration, and policy updates via email.
                </p>
            </div>

            <PrimaryBtn btnText={"Discover"} />
        </div>
    );
}

export default Discover;
