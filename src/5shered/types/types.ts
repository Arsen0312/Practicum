import {TManga} from "./MangaTypes";
import {TMangaFromBekend} from "./dataFromBekend";

export interface IPropsForTManga extends TManga{
    oneManga?: TManga
    desc?: boolean
}