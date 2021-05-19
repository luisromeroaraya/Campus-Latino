const URL = "https://api.mixcloud.com/search/?q=campus+latino&type=cloudcast"

export default function getEpisodes() {
    return fetch(URL)
        .then(res => res.json())
        .then(json => json.data);
}