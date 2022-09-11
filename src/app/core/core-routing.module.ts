import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { FavMoviesComponent } from "./components/fav-movies/fav-movies.component";

const routes: Routes = [
	{
		path: "",
		component: MoviesListComponent,
	},
	{
		path: ":id",
		component: MovieDetailsComponent,
	},
	{
		path: ":id/fav-movies",
		component: FavMoviesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
