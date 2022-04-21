const baseUrl = 'https://api.themoviedb.org/3'

export default baseUrl;



export const urls = {
    movies: '/discover/movie?api_key=865a7502a1780159827b764af0bee919&page=',
    genre: '/genre/movie/list?api_key=865a7502a1780159827b764af0bee919',
    movieById: '/movie/',
    movieByName: '/search/movie?api_key=865a7502a1780159827b764af0bee919&query=',
    login:'/auth/login',
    registration: '/auth/registration'
}
