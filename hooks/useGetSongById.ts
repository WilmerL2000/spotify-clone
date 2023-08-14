import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { Song } from "@/types";

/**
 * The `useGetSongById` function is a custom hook that fetches a song from a Supabase database based on
 * its ID and returns the loading state and the fetched song.
 * @param {string} [id] - The `id` parameter is an optional string that represents the ID of the song
 * to fetch from the Supabase database.
 * @returns The `useGetSongById` function returns an object with two properties: `isLoading` and
 * `song`.
 */
const useGetSongById = (id?: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<Song | undefined>(undefined);
    const { supabaseClient } = useSessionContext();

    useEffect(() => {
        if (!id) {
            return;
        }

        setIsLoading(true);

        /**
         * The function fetches a song from a Supabase database and sets the fetched song data to the state
         * variable.
         * @returns The function `fetchSong` returns nothing.
         */
        const fetchSong = async () => {
            const { data, error } = await supabaseClient
                .from('songs')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                setIsLoading(false);
                return toast.error(error.message);
            }

            setSong(data as Song);
            setIsLoading(false);
        }

        fetchSong();
    }, [id, supabaseClient])

    return useMemo(() => ({
        isLoading,
        song
    }), [isLoading, song]);

}

export default useGetSongById;