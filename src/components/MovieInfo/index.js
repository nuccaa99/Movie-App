import React from "react";
//components
import Thumb from "../Thumb";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//image
import NoImage from "../../images/no_image.jpg"
//styles
import { Wrapper, Content, Text } from "./MovieInfo.Styles";

const MovieInfo = ({ movie }) => {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                    alt="movie-thumb"
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">
                                {movie.vote_average}
                            </div>
                        </div>
                        <div className="director">
                            <h3>DIRECTORS{movie.directors.length > 1 ? 's' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>
                                    {director.name}
                                </p>
                            ))}

                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
}

export default MovieInfo;