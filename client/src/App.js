import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import CardList from "./ui/CardList/CardList";
import SearchContainer from "./ui/SearchContainer/SearchContainer";
import { useFetching } from "./core/hooks/useFetching";
import getAllPosts from "./core/API/CardService";
import Loader from "./ui/Loader/Loader";
import ErrorMessage from "./ui/ErrorMessage/ErrorMessage";
import { usePosts } from "./core/hooks/usePosts";
import { Container } from "./ui/Container/Container";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const sortedPost = usePosts(posts, "", search);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await getAllPosts();
    setPosts(response.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <SearchContainer search={search} setSearch={setSearch} />
      <Typography variant="h6" color="primary" style={{ margin: "20px 0" }}>
        Best github repositories
      </Typography>

      {postError && <ErrorMessage message="Something wrong :(" />}
      {isPostLoading ? <Loader /> : <CardList posts={sortedPost} />}
    </Container>
  );
};

export default App;
