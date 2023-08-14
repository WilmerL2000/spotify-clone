import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Song } from "@/types";

/**
 * The function `useLoadSongUrl` takes a `song` object as input and returns the public URL of the
 * song's storage path using the Supabase client.
 * @param {Song} song - The `song` parameter is an object that represents a song. It likely has
 * properties such as `song_path` which is the path to the song file in a storage system.
 * @returns The function `useLoadSongUrl` returns the public URL of a song file stored in a Supabase
 * storage.
 */
const useLoadSongUrl = (song: Song) => {
    const supabaseClient = useSupabaseClient();

    if (!song) {
        return '';
    }

    const { data: songData } = supabaseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path);

    return songData.publicUrl;
};

export default useLoadSongUrl;