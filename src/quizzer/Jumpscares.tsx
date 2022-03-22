import React from "react";

export function fnafJumpScared({ name }: { name: string }): JSX.Element {
    return (
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DSZ9-eEn3Hc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
