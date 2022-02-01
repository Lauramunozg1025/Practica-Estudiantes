import { url } from '../helps/Url'

export const getData = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    return data;
    
}
