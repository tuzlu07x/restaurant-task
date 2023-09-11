import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "@inertiajs/react";

export default function MultilineTextFields({ kanyeData }) {
    console.log(kanyeData);
    const { get } = useForm();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            {kanyeData.map((kanye, index) => (
                <TextField
                    key={index}
                    sx={{ marginTop: 10, textAlign: "center" }}
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    disabled
                    defaultValue={kanye.quote}
                />
            ))}
            <Button
                color="primary"
                size="sm"
                onClick={() => get(route("kanye"))}
            >
                Refresh
            </Button>
        </div>
    );
}
