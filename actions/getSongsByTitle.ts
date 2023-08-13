import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

import getSongs from "./getSongs";

/**
 * The function `getSongsByTitle` retrieves songs from a Supabase database based on a given title, or
 * returns all songs if no title is provided.
 * @param {string} title - The `title` parameter is a string that represents the title of a song. It is
 * used to filter the songs based on their title. If the `title` parameter is not provided or is an
 * empty string, all songs will be returned.
 * @returns The function `getSongsByTitle` returns a Promise that resolves to an array of `Song`
 * objects.
 */
const getSongsByTitle = async (title: string): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    if (!title) {
        const allSongs = await getSongs();
        return allSongs;
    }

    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .ilike('title', `%${title}%`)
        .order('created_at', { ascending: false })

    if (error) {
        console.log(error.message);
    }

    return (data as any) || [];
};

export default getSongsByTitle;