import React, { useState, useEffect } from "react";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//Components
import HeroImage from "./HeroImage";
import Grid from "./grid";
import Thumb from "./Thumb";
//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

//image
import NoImage from "../images/no_image.jpg";

const Home = () => {
    const { state, loading, error } = useHomeFetch()
    return (
        <>
            {state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                : null
            }
            <Grid
                header="Popular Movies">
                {state.results.map((movie) => (
                    <Thumb key={movie.id} clickable={true}
                        image={movie.poster_path ?
                            IMAGE_BASE_URL + POSTER_SIZE +
                            movie.poster_path : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>


        </>

    )
}

export default Home;