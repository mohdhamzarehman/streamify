import { useState } from "react";

const PlaylistToggle = ({
  addPlaylist,
  playlists,
  togglePlaylistPrivacy,
  deletePlaylist,
  handlePlaylistSelect,
}: any) => {
  const [playlistName, setPlaylistName] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleAddPlaylist = () => {
    addPlaylist(playlistName, isPublic);
    setPlaylistName("");
  };

  return (
    <div>
      <h3>Create New Playlist</h3>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Playlist Name"
      />
      <label>
        <input
          type="checkbox"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
        />
        Public
      </label>
      <button onClick={handleAddPlaylist}>Add Playlist</button>

      <h3>Your Playlists</h3>
      <ul>
        {playlists.map((playlist: any) => (
          <li key={playlist.id}>
            <span onClick={() => handlePlaylistSelect(playlist.id)}>
              {playlist.name} - {playlist.isPublic ? "Public" : "Private"}
            </span>
            <button onClick={() => togglePlaylistPrivacy(playlist.id)}>
              Toggle Privacy
            </button>
            <button onClick={() => deletePlaylist(playlist.id)}>Delete</button>
            <button
              onClick={() => {
                console.log(
                  `View button clicked for playlist ID: ${playlist.id}`
                );
                handlePlaylistSelect(playlist.id);
              }}
            >
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistToggle;
