import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MovieList = (props: any) => {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);

  const handleMovieClick = (movie: any) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  const handleAddToPlaylist = (playlistId: string) => {
    if (selectedMovie) {
      props.handleMovieClick(selectedMovie, playlistId);
      setSelectedMovie(null);
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-3">
      {props.movies.map((movie: any, index: any) => (
        <Card
          key={index}
          className="w-full max-w-sm bg-black rounded-lg overflow-hidden"
        >
          <img
            src={movie.Poster}
            alt="movie"
            width={500}
            height={750}
            className=" object-cover"
            style={{ aspectRatio: "25 / 37" }}
          />
          <CardContent className="p-6 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{movie.Title}</h3>
              <div className="flex items-center gap-1"></div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  onClick={(e) => {
                    console.log(e, movie);
                    return handleMovieClick(movie);
                  }}
                  variant="outline"
                  className="mt-4 w-full text-black"
                >
                  Add to Playlist
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Playlist</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {props.playlists.map((playlist: any) => (
                  <DropdownMenuCheckboxItem
                    key={playlist.id}
                    onSelect={() => {
                      console.log(`Playlist selected: ${playlist.id}`);
                      handleAddToPlaylist(playlist.id);
                    }}
                  >
                    {playlist.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
