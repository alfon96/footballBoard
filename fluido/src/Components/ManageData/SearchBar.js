import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import Player from "../Player/Player";
import classes from "./SearchBar.module.css";

const SearchBar = ({ players, kit, correctiveAction, playerTotalHeight }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const onChangeHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchKeyword);
    if (searchKeyword === "") {
      setSearchResults([]);
      return;
    }
    const foundPlayers = players.filter((player) =>
      player.name.includes(searchKeyword.toUpperCase())
    );

    setSearchResults(foundPlayers ?? null);
  };

  return (
    <>
      <Form onSubmit={onSubmit} className="w-75 ">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search a player by surname"
            aria-label="Search fora player"
            aria-describedby="basic-addon2"
            value={searchKeyword}
            onChange={onChangeHandler}
            className="text-center"
          />
          <Button
            variant="outline-secondary"
            id="search-keyword"
            type="submit"
            className="d-flex align-items-center justify-content-center"
          >
            <FaSearch />
          </Button>
        </InputGroup>
      </Form>

      <div
        className={`d-flex justify-content-center align-items-center gap-3 ${classes.upperContainer}`}
      >
        {searchResults &&
          searchResults.map((player) => {
            return (
              <div
                key={player.number}
                className={classes.container}
                style={{ height: playerTotalHeight }}
              >
                <Player
                  key={player.number}
                  number={player.number}
                  name={player.name}
                  position={player.position}
                  isCaptain={player?.isCaptain}
                  kit={kit}
                  correctiveAction={correctiveAction}
                  isEditing={true}
                ></Player>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SearchBar;
