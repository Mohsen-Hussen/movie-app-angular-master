export interface MovieInterface {
	adult?: boolean;
	backdrop_path?: string;
	budget?: number;
	genres?: [
		{
			id: number;
			name: string;
		},
		{
			id: number;
			name: string;
		},
		{
			id: number;
			name: string;
		}
	];
	homepage?: string;
	id?: number;
	imdb_id?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	release_date?: string;
	revenue?: number;
	runtime?: number;
	status?: string;
	tagline?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}
