import {axiosService} from "./axios.service";

export const movieService={
    getAll:()=>axiosService.get(urls.movie)
}