export default function getEpisodes(URL, episodes) {
    return fetch(URL)
        .then(res => res.json())
        .then(json => {
            json.data.forEach( function (element) {
                if (element['key'].includes('campus-latino-')) {
                    episodes.push(element);
                }
            });
            episodes.sort((a, b) => (a.name > b.name) ? -1 : 1)
            if (json.paging.next) {
                getEpisodes(json.paging.next, episodes);
            }
        });
}