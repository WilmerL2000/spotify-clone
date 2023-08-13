import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Song } from "@/types";

/**
 * The function `useLoadImage` takes a `song` object as input and returns the public URL of the image
 * associated with the song using the Supabase client.
 * @param {Song} song - The `song` parameter is of type `Song`, which represents a song object. It
 * likely contains information about the song, such as its title, artist, and image path.
 * @returns the public URL of the image associated with the given song.
 */
const useLoadImage = (song: Song) => {
    const supabaseClient = useSupabaseClient();

    if (!song) {
        return null;
    }

    const { data: imageData } = supabaseClient
        .storage
        .from('images')
        .getPublicUrl(song.image_path);

    return imageData.publicUrl;
};

export default useLoadImage;