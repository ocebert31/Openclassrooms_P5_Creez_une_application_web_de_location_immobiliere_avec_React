async function getDataFromAPI() {
    const response = await fetch("./logement.json");
    const data = await response.json();
    return data;
}