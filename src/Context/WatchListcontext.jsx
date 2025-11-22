import { createContext, useState , useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [genreList,setGenreList] = useState([]);

  useEffect (()=>{
      let url =  `https://api.themoviedb.org/3/genre/movie/list?api_key=142a67e8aeb6f65aa6b125275347d4c9`;
  
      
      fetch( url
        //  `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=142a67e8aeb6f65aa6b125275347d4c9`
      )
      .then((response)=> response.json())
      .then((data)=> setGenreList(data.genres || []));
    },[]);
  

  const toggledWatchlist = (movie) => {
    const exists = watchlist.some((m) => m.id === movie.id);

    if (!exists) {
      // Add movie
      setWatchlist([...watchlist, movie]);
    } else {
      // Remove movie
      setWatchlist(watchlist.filter((m) => m.id !== movie.id));
    }
  };

  return (
    <WatchListContext.Provider value={{ watchlist, toggledWatchlist , genreList}}>
      {children}
    </WatchListContext.Provider>
  );
};
