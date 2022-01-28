import { getAnimeShortInfoQuery } from '../../model/queries';
import { NextApiRequest, NextApiResponse } from 'next';

// Make the HTTP Api request
async function handleResponse(response: Response) {
    const json = await response.json();
    return response.ok ? json : Promise.reject(json);
}

function handleError(error: Error) {
    alert('Error, check console');
    console.error(error);
}
async function handler(req: NextApiRequest, res: NextApiResponse) {
    const getVariables = () => {
        return {
            search: req.query.search as string,
            page: req.query.page as string,
            perPage: req.query.perPage as string,
        };
    };
    // Define the config we'll need for our Api request
    const getOptions = (query: string) => {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: getVariables(),
            }),
        };
    };
    var url = 'https://graphql.anilist.co';

    try {
        const response = await fetch(url, getOptions(getAnimeShortInfoQuery));
        const anime = await handleResponse(response);
        res.status(200).send(anime);
    } catch (e) {
        handleError(e);
    }
}

export default handler;
