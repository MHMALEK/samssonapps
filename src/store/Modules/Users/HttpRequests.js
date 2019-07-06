import HttpClient from '../../../utils/httpClient';

const GET_CARDS = '/employees';

export const getCards = () => {
    return HttpClient.get(GET_CARDS)
}