import { useState, useEffect } from "react";
import MovieList from "./components/shared/MovieList";
import MovieListHeading from "./components/shared/MovieListHeading";
import SearchBox from "./components/shared/SearchBox";
import Navbar from "./components/shared/navbar";
import PlaylistToggle from "./components/shared/PlaylistToggle";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<any | null>(null);

  const getMovieRequest = async (searchValue: string) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=658144a4`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const savedPlaylists = JSON.parse(
      localStorage.getItem("react-movie-app-playlists")
    );

    if (savedPlaylists) {
      setPlaylists(savedPlaylists);
    }
  }, []);

  const saveToLocalStorage = (key: string, items: any[]) => {
    localStorage.setItem(key, JSON.stringify(items));
  };

  const addMovieToPlaylist = (movie: any, playlistId: string) => {
    const updatedPlaylists = playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        return {
          ...playlist,
          movies: [...playlist.movies, movie],
        };
      }
      return playlist;
    });
    setPlaylists(updatedPlaylists);
    saveToLocalStorage("react-movie-app-playlists", updatedPlaylists);
  };

  const addPlaylist = (name: string, isPublic: boolean) => {
    const newPlaylist = {
      id: uuidv4(),
      name,
      isPublic,
      movies: [],
    };
    const newPlaylistList = [...playlists, newPlaylist];
    setPlaylists(newPlaylistList);
    saveToLocalStorage("react-movie-app-playlists", newPlaylistList);
  };

  const togglePlaylistPrivacy = (id: string) => {
    const updatedPlaylists = playlists.map((playlist) =>
      playlist.id === id
        ? { ...playlist, isPublic: !playlist.isPublic }
        : playlist
    );
    setPlaylists(updatedPlaylists);
    saveToLocalStorage("react-movie-app-playlists", updatedPlaylists);
  };

  const deletePlaylist = (id: string) => {
    const updatedPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(updatedPlaylists);
    saveToLocalStorage("react-movie-app-playlists", updatedPlaylists);
  };

  const handlePlaylistSelect = (id: string) => {
    console.log(`Selected playlist ID: ${id}`);
    const playlist = playlists.find((playlist) => playlist.id === id);
    setSelectedPlaylist(playlist);
    console.log(`Selected playlist: `, playlist);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            handleMovieClick={addMovieToPlaylist}
            playlists={playlists}
            handlePlaylistSelect={handlePlaylistSelect}
          />
        </div>
        {selectedPlaylist && (
          <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading={`Playlist: ${selectedPlaylist.name}`} />
            <MovieList
              movies={selectedPlaylist.movies}
              handleMovieClick={() => {}}
              playlists={[]}
              handlePlaylistSelect={() => {}}
            />
          </div>
        )}
        <div className="row">
          <PlaylistToggle
            addPlaylist={addPlaylist}
            playlists={playlists}
            togglePlaylistPrivacy={togglePlaylistPrivacy}
            deletePlaylist={deletePlaylist}
            handlePlaylistSelect={handlePlaylistSelect}
          />
        </div>
      </div>
    </>
  );
};

export default App;
