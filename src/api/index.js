const URL = "https://api.mixcloud.com/search/?limit=1000&offset=0&q=campus+latino&type=cloudcast"

export default function getEpisodes() {
    return fetch(URL)
        .then(res => res.json())
//        .then(json => json.data);
}