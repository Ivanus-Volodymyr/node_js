export interface IMovieDetailsInterface {
    adult?: boolean,
    backdrop_path?: string,
    belongs_to_collection?: IBelongs_to_collection,
    budget?: number,
    genres?: [
        {
            id: number,
            name: string
        },
        {
            id: number,
            name: string
        },
        {
            id: number,
            name: string
        }
    ],
    homepage?: string,
    id?: number,
    imdb_id?: string,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    production_companies?: [
        {
            id: number,
            logo_path: number,
            name: string,
            origin_country: string
        },
        {
            id: number,
            logo_path: number,
            name: string,
            origin_country: string
        },
        {
            id: number,
            logo_path: number,
            name: string,
            origin_country: string
        }
    ],
    production_countries?: [
        {
            iso_3166_1: string,
            name: string
        }
    ],
    release_date?: string
    revenue?: number,
    runtime?: number,
    spoken_languages?: [
        {
            english_name: string,
            iso_639_1: string,
            name: string
        },
        {
            english_name: string,
            iso_639_1: string,
            name: string
        }
    ],
    status?: string;
    tagline?: string;
    title?: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number
}

export interface IBelongs_to_collection {
    id?: number,
    name: string,
    poster_path: string,
    backdrop_path: string
}