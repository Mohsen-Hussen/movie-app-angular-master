import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MoviesReponseInterface } from "../interfaces/movies-res.interface";
import { environment } from "src/environments/environment";
import { MovieInterface } from "../interfaces/movie.interface";

@Injectable({
	providedIn: "root",
})
export class MoviesSerivce {
	constructor(private http: HttpClient) {}

	fetchMovies(page: number, moviesFilter: string) {
		const params = new HttpParams()
			.set("api_key", environment.moviesApiKey)
			.set("page", page)
			.set("region", "US");
		return this.http.get<MoviesReponseInterface>(
			`${environment.baseUrl}/movie/${moviesFilter}`,
			{ params }
		);
	}

	fecthMovieById(movieId: number) {
		return this.http.get<MovieInterface>(
			`${environment.baseUrl}/movie/${movieId}?api_key=${environment.moviesApiKey}`
		);
	}
}
