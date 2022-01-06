import { getAnimeByIdQuery, getAnimeShortInfoQuery } from './queries';

var variables = {
    page: 1,
    perPage: 20,
};
const getVariables = (page: number, perPage: number) => {};
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
            variables: variables,
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
        console.log(e);
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
