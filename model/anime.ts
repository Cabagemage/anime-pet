import { getAnimeByIdQuery, getAnimeShortInfoQuery } from './queries';

const getVariables = (page: number, perPage: number) => {
    return {
        page: page,
        perPage: perPage,
    };
};
// Define the config we'll need for our Api request
const getOptions = (query: string) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: getVariables(1, 20),
        }),
    };
    return options;
};
var url = 'https://graphql.anilist.co';

// Make the HTTP Api request

async function handleResponse(response: Response) {
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
}

function handleError(error: Error) {
    alert('Error, check console');
    console.error(error);
}
export async function handleShortAnimeFetch() {
    try {
        const response = await fetch(url, getOptions(getAnimeShortInfoQuery));
        const anime = await handleResponse(response);

        return anime;
    } catch (e) {
        handleError(e);
    }
}

export async function handleFullAnimeFetch(id: number) {
    try {
        const response = await fetch(url, getOptions(getAnimeByIdQuery(id)));
        const anime = await handleResponse(response);

        return anime;
    } catch (e) {
        console.log(e);
    }
}
