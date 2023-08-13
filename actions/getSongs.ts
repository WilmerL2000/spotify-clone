import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

/**
 * The function `getSongs` retrieves songs from a Supabase database and returns them as an array.
 * @returns The function `getSongs` returns a Promise that resolves to an array of `Song` objects.
 */
const getSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.log(error.message);
    }

    return (data as any) || [];
};

export default getSongs;