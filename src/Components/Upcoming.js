import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import styled from 'styled-components';
import Sidebar from './Sidebar';

function Upcoming({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'upcoming') {
            return upcomingAnime?.map((anime) => (
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                </Link>
            ));
        } else {
            return searchResults?.map((anime) => (
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                </Link>
            ));
        }
    };

    return (
        <PopularStyled>
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    );
}

export default Upcoming;
