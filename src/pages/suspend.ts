import { APIRoute } from "astro"
import { getSuspended } from "../lib/suspendRegister";

export const get: APIRoute = async ({ url }) => {
    const uuid = url.searchParams.get('uuid');
    console.log('reaching for suspended', uuid);
    const promise = getSuspended(uuid);
    const body = await promise;
    console.log(uuid, 'resolved as', body);
    return {
        body,
    };
}
