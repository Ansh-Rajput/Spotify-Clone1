import { useUser } from "./UseUser";

const { default: UseAuthModal } = require("./UseAuthModal");
const { default: UsePlayer } = require("./UsePlayer");

const UseOnPlay = (songs) => {
    const player = UsePlayer();

    const authModal = UseAuthModal();
    const {user} = useUser();

    const onPlay = (id) => {
        if(!user){
            return authModal.onOpen();
        }
        player.setId(id);
        player.setIds(songs.map((song)=> song.id)); 
    }

    return onPlay;
}

export default UseOnPlay;