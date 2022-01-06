export interface IPageInfo {
    currentPage: number;
    hasNextPage: boolean;
    lastPage: number;
    perPage: number;
    total: number;
}
export interface IAnime {
    Page: {
        media: {
            coverImage: string;
        };
        id: number;
        title: {
            romaji: string;
        };
    };
    pageInfo: IPageInfo;
}
