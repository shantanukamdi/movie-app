import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Rating from 'react-rating';
 
const MovieDetailsWrapper = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 20px;
	
`;

const MovieImage = styled.div`
	margin: auto;
	padding-top: 30px;
	& img {
		border-radius: 10px;
		margin-left: 20px;
		box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.25);
    }
`;

const MovieInformation = styled.div`
	padding-top: 30px;
	& p {
		color: #37474f;
		font-weight: 400;
		font-size: 26px;
		margin-bottom: 20px;
		margin-top: 20px;
	}
	& Rating {
		margin-top: 20px;
	}
`;

const RatingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Genre = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	& p {
		font-size: 12px;
	}

	& div {
		display: flex;
		& small {
			margin-right: 5px;
			width: 100%;
		}
	}
`;

const Synopsis = styled.div`
	display: flex;
	flex-direction: column;

	& p {
		font-size: 12px;
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: center;

	& button {
		margin: 20px;
		text-decoration: none;
		padding: 10px;
		text-align: center;
		background: #2E3351;
		border: 0;
		color: white;
		cursor: pointer;
		border-radius: 5px;
		font-size: 14px;
		font-weight: 400;

		&:hover {
			transition: all .2s ease-in-out;
			transform: scale(1.05);
		}
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
					<MovieImage>
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
					</MovieImage>
					<MovieInformation>
						{
							this.props.movieDetails
							&& this.props.movieDetails.movieDetails
							&& <div>
								<p>{this.props.movieDetails.movieDetails.original_title.toUpperCase()}</p>
								<small>{this.props.movieDetails.movieDetails.tagline.toUpperCase()}</small>
								<br></br>
								<br></br>
								
								<RatingWrapper>
									<div>
									<Rating 
									initialRating={this.props.movieDetails.movieDetails.vote_average / 2}
									readonly
									emptySymbol="fa fa-star-o fa-1x"
									fullSymbol="fa fa-star fa-1x"
									/>
									
									<small>{this.props.movieDetails.movieDetails.vote_average}</small>
									</div>
								<small>
									{
										this.props.movieDetails.movieDetails.spoken_languages[0].name
										+ '/' + 
										this.props.movieDetails.movieDetails.runtime + ' MIN'
										+ '/' + 
										this.props.movieDetails.movieDetails.release_date.split('-')[0]
									}
								</small>
								</RatingWrapper>

								<Genre>
									<p>THE GENRES</p>
									<div>
										{this.props.movieDetails.movieDetails.genres.map((element, index) => {
											return (
												<small>{element.name}</small>
											);
										})}
									</div>
								</Genre>

								<Synopsis>
									<p>THE SYNOPSIS</p>
									{
										this.props.movieDetails.movieDetails.overview
									}
								</Synopsis>

								<Buttons>
									<button>Website</button>
									<button>IMDB</button>
									<button>Watch Trailer</button>
								</Buttons>
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