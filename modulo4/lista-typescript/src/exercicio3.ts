function catalogoDeFilmes (name:string, releaseYear:number, genre: string, pontuation?:number) : object {

    type typeOfFilme = {
        nome: string,
        anoLancamento: number,
        genero: string,
        pontuacao? : number
    }

    const film : typeOfFilme = {
        nome: name,
        anoLancamento: releaseYear,
        genero: genre,
        pontuacao : pontuation
    }

    return film
}

enum GENRE {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

console.log(catalogoDeFilmes("Hidden Figures", 2017, GENRE.DRAMA, 100))
console.log(catalogoDeFilmes("Colateral Beauty", 2017, GENRE.DRAMA))