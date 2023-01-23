import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import Spotify from "react-spotify-embed"

export default function Header() {
  const [musicShowing, setMusicShowing] = useState(true)
  const musicToggleClick = () => {
    setMusicShowing(prev => !prev)
  }

  return (
    <>
        <h1>WindowShopper</h1>
        {musicShowing ? <Spotify wide link="https://open.spotify.com/playlist/37i9dQZF1DX0MLFaUdXnjA?si=fde25fe7c4f5466d"/> : null}
        <button name="spotify" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</button>
        <button>Toggle Dark Mode</button>
        <NavLink to="/shop"><button>Shop</button></NavLink>
        <NavLink to='/addItem'><button>List An Item</button></NavLink>
        <NavLink to="/likes"><button>Likes/Dislikes</button></NavLink>
        <NavLink to="/cart"><button>Cart</button></NavLink>
    </>
  )
}