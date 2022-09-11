import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieInterface } from "../../interfaces/movie.interface";
import { MoviesSerivce } from "../../services/movies-serivce.service";

@Component({
	selector: "app-fav-movies",
	templateUrl: "./fav-movies.component.html",
	styleUrls: ["./fav-movies.component.scss"],
})
export class FavMoviesComponent implements OnInit {
	constructor(
		private activatedRoute: ActivatedRoute,
		private moviesService: MoviesSerivce
	) {}

	favMovieId: number = +this.activatedRoute.snapshot.params["id"];
	singleMovie: MovieInterface = {};

	ngOnInit(): void {
		this.fetchFavMovie();
	}

	fetchFavMovie() {
		let movieFavItem = localStorage.getItem("favMovies") as string;
		let localStMovies = JSON.parse(movieFavItem);
		this.singleMovie = localStMovies;

		// this.moviesService.fecthMovieById(this.favMovieId).subscribe(
		// 	(res) => {
		// 		this.singleMovie = res;
		// 	},
		// 	(error) => {
		// 		console.log(error);
		// 	}
		// );
	}
}
