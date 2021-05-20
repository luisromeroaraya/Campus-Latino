const URL = "https://api.mixcloud.com/radiocampusbruxelles/:slug/"

export default function getData(slug) {
    const url = URL.replace(":slug", slug);
    return fetch(url)
        .then(res => res.json());
}