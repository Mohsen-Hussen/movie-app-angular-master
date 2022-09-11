import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieInterface } from "../../interfaces/movie.interface";
import { MoviesSerivce } from "../../services/movies-serivce.service";

@Component({
	selector: "app-movie-details",
	templateUrl: "./movie-details.component.html",
	styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
	bntStyle: any | string;
	singleMovie: MovieInterface = {};
	constructor(
		private activatedRoute: ActivatedRoute,
		private moviesService: MoviesSerivce,
		private router: Router
	) {}

	ngOnInit(): void {
		this.fetchMovie();
	}

	fetchMovie() {
		this.moviesService
			.fecthMovieById(this.activatedRoute.snapshot.params["id"])
			.subscribe(
				(res) => {
					this.singleMovie = res;
				},
				(error) => {
					console.log(error);
				}
			);
	}

	favMovie(movieId: number | undefined) {
		let singleMoviesArr = JSON.stringify(this.singleMovie);
		localStorage.setItem("favMovies", singleMoviesArr);
		this.router.navigate(["movies", movieId, "fav-movies"]);
	}
}
