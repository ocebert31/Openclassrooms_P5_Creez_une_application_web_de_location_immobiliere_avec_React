import getDataFromAPI from './dataFetch';

async function getItemFromApi(id) {
    return getDataFromAPI().then(data => {
        return data.find(item => item.id === id)
    });
}

export default getItemFromApi;