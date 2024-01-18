import React from "react";

import { useState } from "react";
import { fetchProvider } from "../../../api";
import { useParams } from "react-router-dom";

export default function ProviderProfile() {
    const { providerId } = useParams();
    const [provider, setProvider] = useState("");
    if (providerId) {
        fetchProvider(providerId)
            .then((provider) => {
                setProvider(provider);
            })
            .catch((e) => console.log(e));
    }

    const { name, title, bio, occupation, education, location, languages } = provider;

    if (provider) {
        //TODO: Render profile page, with all the fields
        return (
            <>
                {JSON.stringify(provider)}
            </>
        );
    } else {
        return (<>Loading...</>);
    }
}