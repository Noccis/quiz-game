import React, { createContext, useState, useContext, useCallback, Children } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {

    const [playerName, setPlayerName] = useState("Unknown Hero");
    const [playerScore, setPlayerScore] = useState(0);

    return (
        <PlayerContext.Provider value={{playerName, playerScore, setPlayerName, setPlayerScore}}>
           {children}
        </PlayerContext.Provider>
    );
}

export const usePlayerInfo = () => useContext(PlayerContext);