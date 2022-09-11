import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth-service.service";
import { MovieInterface } from "../../interfaces/movie.interface";
import { MoviesCriteria } from "../../interfaces/movies-criteria.interface";
import { MoviesSerivce } from "../../services/movies-serivce.service";
@Component({
	selector: "app-movies-list",
	templateUrl: "./movies-list.component.html",
	styleUrls: ["./movies-list.component.scss"],
})
export class MoviesListComponent implements OnInit {
	displayedColumns: string[] = ['title', 'release_date', 'adult', 'vote_average', 'actions'];
	moviesFilterationTabs: string[] = ['popular', 'top_rated', 'upcoming', 'now_playing'];
	movies: MovieInterface[] = [];
	totalMoviesCount = 0;
	activeTab = this.moviesFilterationTabs[0];
	page = 1;

	constructor(
		public authService: AuthService,
		private moviesService: MoviesSerivce,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.getMoviese();
	}

	getMoviese(): void {
		this.moviesService.fetchMovies(this.page, this.activeTab).subscribe(
			(res) => {
				this.movies = [...res?.results];
				this.totalMoviesCount = res?.total_results;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	onChangeTab(tabEvent: MatTabChangeEvent): void {
		console.log(tabEvent);
		this.activeTab = this.moviesFilterationTabs[tabEvent?.index];
		this.getMoviese();
	}

	onViewMovie(movieId: number): void {
		this.router.navigate(['movies', movieId]);
	}

	onChangePage(event: { pageIndex: number }): void {
		this.page = event?.pageIndex;
		this.getMoviese();
	}
}
