import { extractQotdResponse} from "./extractQotdResponse";

export function fetchQuoteOfTheDay() {
    debugger;
    const proxy = "https://corsproxy.io/?"
    const baseUrl = "https://favqs.com/api";
    const endPoint = "/qotd";
    const url = proxy + baseUrl + endPoint;
    const promise = fetch(url);
    promise.then(extractQotdResponse);
}