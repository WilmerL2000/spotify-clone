import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

/**
 * The function `getLikedSongs` retrieves a list of liked songs from a Supabase database for a specific
 * user.
 * @returns The function `getLikedSongs` returns a Promise that resolves to an array of `Song` objects.
 */
const getLikedSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    // * (*, songs(*)) -> population
    const { data } = await supabase
        .from('liked_songs')
        .select('*, songs(*)')
        .eq('user_id', session?.user?.id)
        .order('created_at', { ascending: false })

    if (!data) return [];

    return data.map((item) => ({
        ...item.songs
    }))
};

export default getLikedSongs;