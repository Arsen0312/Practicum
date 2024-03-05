import React from 'react';
import {TManga} from "../../../5shered/types/MangaTypes";

type TCatalogListProps = {
    manga: TManga[],
    render: (item: TManga) => React.ReactElement;
    className?: string
}

const CatalogList = ({ manga, render, className }: TCatalogListProps) => {

    return (
            <ul className={className}>
                {manga.map((item) => <li>{render(item)}</li>)}
            </ul>
    );
};

export default CatalogList;