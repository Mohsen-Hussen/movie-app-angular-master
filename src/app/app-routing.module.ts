import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/services/auth-guard.guard";

const routes: Routes = [
	{
		path: "movies",
		loadChildren: () =>
			import(`src/app/core/core.module`).then((m) => m.CoreModule),
		canActivate: [AuthGuard],
	},
	{
		path: "auth",
		loadChildren: () =>
			import(`src/app/auth/auth.module`).then((m) => m.AuthModule),
	},
	{ path: "**", redirectTo: "movies", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
