import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { SharedModule } from "../shared/shared.module";
import { FavMoviesComponent } from './components/fav-movies/fav-movies.component';

@NgModule({
	declarations: [MoviesListComponent, MovieDetailsComponent, FavMoviesComponent],
	imports: [CommonModule, SharedModule, CoreRoutingModule],
})
export class CoreModule { }
