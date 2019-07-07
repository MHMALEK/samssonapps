import HttpClient from '../../../utils/httpClient';

const GET_CARDS = '/employees';

export const getCardsFromApi = () => {
    return HttpClient.get(GET_CARDS)
}