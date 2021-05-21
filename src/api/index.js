const URL = "https://api.mixcloud.com/search/?limit=20&offset=:offset&q=campus+latino&type=cloudcast"

export default function getEpisodes(page) {
    const offset = (page-1)*20;
    const url = URL.replace(":offset", offset);
    return fetch(url)
        .then(res => res.json())
//        .then(json => json.data);
}