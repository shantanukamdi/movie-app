import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MovieDetailsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100vh;
	padding: 30px;
	background-image: url('https://image.tmdb.org/t/p/original/vBSuGU5OyJ5lGamkqXo2kVAe01F.jpg');
`;

const MovieImage = styled.div`
	& img {
		max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }
`;

const MovieInformation = styled.div`

	& h3 {
		font-weight: 400;
		font-size: 32px;
	}

`;

class MovieDetails extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<MovieDetailsWrapper>
					{/* <MovieImage>
						{this.props.movieDetails
							&& this.props.movieDetails.movieDetails
							&& this.props.movieDetails.movieDetails.poster_path
							&& <MovieImage>
								<img
									src={`https://image.tmdb.org/t/p/w342/${this.props.movieDetails.movieDetails.poster_path}`}
									alt={this.props.movieDetails.movieDetails.title}
								/>
							</MovieImage>
						}
					</MovieImage> */}
					<MovieInformation>
						{
							this.props.movieDetails
							&& this.props.movieDetails.movieDetails
							&& <div>
								<h3>{this.props.movieDetails.movieDetails.original_title.toUpperCase()}</h3>
								<small>{this.props.movieDetails.movieDetails.tagline}</small>
							   </div>
						}
					</MovieInformation>
				</MovieDetailsWrapper>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { movieDetails, credits } = state;
	return {
		movieDetails,
		credits
	}
}

export default connect(mapStateToProps, null)(MovieDetails);