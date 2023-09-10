import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useForm } from "@inertiajs/react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function List({ restaurants }) {
    const { get } = useForm();
    const [isActive, setIsActive] = useState(null);
    console.log(restaurants);
    useEffect(() => {
        if (isActive === true) {
            get(route("restaurant.index", { isActive: isActive }));
        }
    }, [isActive]);

    return (
        <>
            <React.Fragment>
                <CardContent sx={{ background: "#ABEDF7" }}>
                    {restaurants.bluerestaurant.indoorarea.map((res) => (
                        <>
                            <Typography variant="h6" component="div">
                                Dining Area :{" "}
                                <small>{res.dining_area.name}</small>
                            </Typography>
                            <Typography>
                                Table Name : <small>{res.name}</small>
                            </Typography>
                            <Typography>
                                Restaurant Name :{" "}
                                <small>{res.restaurant.name}</small>
                            </Typography>
                            <Typography>
                                Min Capacity :{" "}
                                <small>{res.minimum_capacity}</small>
                            </Typography>
                            <Typography>
                                Max Capacity :{" "}
                                <small>{res.maximum_capacity}</small>
                            </Typography>
                        </>
                    ))}
                </CardContent>

                <CardContent sx={{ background: "#ABEDF7" }}>
                    {restaurants.bluerestaurant.outhdoorterracearea.map(
                        (res) => (
                            <>
                                <Typography variant="h6" component="div">
                                    Dining Area :{" "}
                                    <small>{res.dining_area.name}</small>
                                </Typography>
                                <Typography>
                                    Table Name : <small>{res.name}</small>
                                </Typography>
                                <Typography>
                                    Restaurant Name :{" "}
                                    <small>{res.restaurant.name}</small>
                                </Typography>
                                <Typography>
                                    Min Capacity :{" "}
                                    <small>{res.minimum_capacity}</small>
                                </Typography>
                                <Typography>
                                    Max Capacity :{" "}
                                    <small>{res.maximum_capacity}</small>
                                </Typography>
                            </>
                        )
                    )}
                </CardContent>

                <CardContent sx={{ background: "#ABEDF7", marginTop: 10 }}>
                    {restaurants.greenrestaurant.indoorarea.map((res) => (
                        <>
                            <Typography variant="h6" component="div">
                                Dining Area :{" "}
                                <small>{res.dining_area.name}</small>
                            </Typography>
                            <Typography>
                                Table Name : <small>{res.name}</small>
                            </Typography>
                            <Typography>
                                Restaurant Name :{" "}
                                <small>{res.restaurant.name}</small>
                            </Typography>
                            <Typography>
                                Min Capacity :{" "}
                                <small>{res.minimum_capacity}</small>
                            </Typography>
                            <Typography>
                                Max Capacity :{" "}
                                <small>{res.maximum_capacity}</small>
                            </Typography>
                        </>
                    ))}
                </CardContent>

                <CardContent sx={{ background: "#ABEDF7" }}>
                    {restaurants.greenrestaurant.outhdoorarea.map((res) => (
                        <>
                            <Typography variant="h6" component="div">
                                Dining Area :{" "}
                                <small>{res.dining_area.name}</small>
                            </Typography>
                            <Typography>
                                Table Name : <small>{res.name}</small>
                            </Typography>
                            <Typography>
                                Restaurant Name :{" "}
                                <small>{res.restaurant.name}</small>
                            </Typography>
                            <Typography>
                                Min Capacity :{" "}
                                <small>{res.minimum_capacity}</small>
                            </Typography>
                            <Typography>
                                Max Capacity :{" "}
                                <small>{res.maximum_capacity}</small>
                            </Typography>
                        </>
                    ))}
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
