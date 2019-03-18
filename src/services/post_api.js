import { get } from "axios"
export default () => {
    return get("http://jsonplaceholder.typicode.com/posts")
}