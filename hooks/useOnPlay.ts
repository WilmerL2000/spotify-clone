import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUser();

    /**
     * The function `onPlay` checks if a user is logged in and opens a modal if not, and then sets the ID
     * and IDs of the player.
     * @param {string} id - A string representing the ID of a song.
     * @returns If the `user` is not defined, the `authModal.onOpen()` function is being returned.
     */
    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }

    return onPlay;
}

export default useOnPlay;