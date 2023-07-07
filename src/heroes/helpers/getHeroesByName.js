import { heroes } from "../data/heroes";

export function getHeroesByName(superhero){
    // const validPublisher = ['DC Comics','Marvel Comics'];
    // if(!validPublisher.includes(publisher)){
    //     throw new Error(`${publisher} no existe`);
    // }
    superhero = superhero.toLocaleLowerCase().trim();
    if(superhero.length === 0) return [];

    return heroes.filter(hero=> hero.superhero.toLocaleLowerCase().includes(superhero));
}