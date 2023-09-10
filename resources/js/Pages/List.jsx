import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useForm } from "@inertiajs/react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function List({ groupedDiningAreas }) {
    const { get } = useForm();
    const [isActive, setIsActive] = useState(null);

    useEffect(() => {
        if (isActive === true) {
            get(route("restaurant.index", { isActive: isActive }));
        }
    }, [isActive]);

    return (
        <>
            <React.Fragment>
                <CardContent sx={{ background: "#ABEDF7" }}>
                    {groupedDiningAreas.greenrestaurant.map(
                        (greenrestaurant) => (
                            <>
                                <Typography variant="h6" component="div">
                                    Dining Area :{" "}
                                    <small>{greenrestaurant.name}</small>
                                </Typography>
                                {greenrestaurant.tables.map((item) => (
                                    <>
                                        <Typography>
                                            Table Name :{" "}
                                            <small>{item.name}</small> Dining
                                            Area Name :{" "}
                                            <small>
                                                {item.dining_area.name}
                                            </small>{" "}
                                            Minimum Capacity :{" "}
                                            <small>
                                                {" "}
                                                {item.minimum_capacity}
                                            </small>{" "}
                                            Maximum Capacity :{" "}
                                            <small>
                                                {item.maximum_capacity}
                                            </small>
                                        </Typography>
                                    </>
                                ))}
                            </>
                        )
                    )}
                </CardContent>

                <CardContent sx={{ background: "#ABEDF7", marginTop: 10 }}>
                    {groupedDiningAreas.bluerestaurant.map(
                        (greenrestaurant) => (
                            <>
                                <Typography variant="h6" component="div">
                                    Dining Area :{" "}
                                    <small>{greenrestaurant.name}</small>
                                </Typography>
                                {greenrestaurant.tables.map((item) => (
                                    <>
                                        <Typography>
                                            Table Name :{" "}
                                            <small>{item.name}</small> Dining
                                            Area Name :{" "}
                                            <small>
                                                {item.dining_area.name}
                                            </small>
                                            Minimum Capacity :{" "}
                                            <small>
                                                {item.minimum_capacity}
                                            </small>{" "}
                                            Maximum Capacity :{" "}
                                            <small>
                                                {item.maximum_capacity}
                                            </small>
                                        </Typography>
                                    </>
                                ))}
                            </>
                        )
                    )}
                </CardContent>

                <CardActions>
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button
                            onClick={() =>
                                get(
                                    route("restaurant.index", {
                                        isActive: null,
                                    })
                                )
                            }
                        >
                            Tables
                        </Button>
                        <Button
                            onClick={() =>
                                get(
                                    route("restaurant.index", {
                                        isActive: true,
                                    })
                                )
                            }
                        >
                            Active Tables
                        </Button>
                    </ButtonGroup>
                </CardActions>
            </React.Fragment>
        </>
    );
}
