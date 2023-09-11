import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Button";
import { useForm } from "@inertiajs/react";

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
                <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Restaurant Name</TableCell>
                                <TableCell align="right">Area Name</TableCell>
                                <TableCell align="right">Table Name</TableCell>
                                <TableCell align="right">
                                    Max Capacity
                                </TableCell>
                                <TableCell align="right">
                                    Min Capacity
                                </TableCell>
                                <TableCell align="right">Active</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurants.bluerestaurant.indoorarea.map(
                                (row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.restaurant.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.dining_area.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.minimum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.maximum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.is_active === 1 ? (
                                                <Box
                                                    sx={{
                                                        color: "success.main",
                                                    }}
                                                >
                                                    Active
                                                </Box>
                                            ) : (
                                                <Box
                                                    sx={{
                                                        color: "primary.main",
                                                    }}
                                                >
                                                    Not Active
                                                </Box>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer
                    component={Paper}
                    sx={{ marginTop: 5, boxShadow: 5 }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Restaurant Name</TableCell>
                                <TableCell align="right">Area Name</TableCell>
                                <TableCell align="right">Table Name</TableCell>
                                <TableCell align="right">
                                    Max Capacity
                                </TableCell>
                                <TableCell align="right">
                                    Min Capacity
                                </TableCell>
                                <TableCell align="right">Active</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurants.bluerestaurant.outhdoorterracearea.map(
                                (row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.restaurant.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.dining_area.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.minimum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.maximum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.is_active === 1 ? (
                                                <Box
                                                    sx={{
                                                        color: "success.main",
                                                    }}
                                                >
                                                    Active
                                                </Box>
                                            ) : (
                                                <Box
                                                    sx={{
                                                        color: "primary.main",
                                                    }}
                                                >
                                                    Not Active
                                                </Box>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer
                    component={Paper}
                    sx={{ marginTop: 5, boxShadow: 5 }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Restaurant Name</TableCell>
                                <TableCell align="right">Area Name</TableCell>
                                <TableCell align="right">Table Name</TableCell>
                                <TableCell align="right">
                                    Max Capacity
                                </TableCell>
                                <TableCell align="right">
                                    Min Capacity
                                </TableCell>
                                <TableCell align="right">Active</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurants.greenrestaurant.indoorarea.map(
                                (row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.restaurant.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.dining_area.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.minimum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.maximum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.is_active === 1 ? (
                                                <Box
                                                    sx={{
                                                        color: "success.main",
                                                    }}
                                                >
                                                    Active
                                                </Box>
                                            ) : (
                                                <Box
                                                    sx={{
                                                        color: "primary.main",
                                                    }}
                                                >
                                                    Not Active
                                                </Box>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer
                    component={Paper}
                    sx={{ marginTop: 5, boxShadow: 5 }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Restaurant Name</TableCell>
                                <TableCell align="right">Area Name</TableCell>
                                <TableCell align="right">Table Name</TableCell>
                                <TableCell align="right">
                                    Max Capacity
                                </TableCell>
                                <TableCell align="right">
                                    Min Capacity
                                </TableCell>
                                <TableCell align="right">Active</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurants.greenrestaurant.outhdoorarea.map(
                                (row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.restaurant.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.dining_area.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.minimum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.maximum_capacity}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.is_active === 1 ? (
                                                <Box
                                                    sx={{
                                                        color: "success.main",
                                                    }}
                                                >
                                                    Active
                                                </Box>
                                            ) : (
                                                <Box
                                                    sx={{
                                                        color: "primary.main",
                                                    }}
                                                >
                                                    Not Active
                                                </Box>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

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
