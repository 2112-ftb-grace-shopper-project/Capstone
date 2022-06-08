import React from "react";

const Sort = ({ animalList, setName, setSearchTerm, /*setDifficulty*/ }) => {
  const clearSort = () => {
    const arr = animalList.sort(function (a, b) {
      const na = a.id;
      const nb = b.id;
      if (na < nb) {
        return -1;
      }
      if (na > nb) {
        return 1;
      }
      return 0;
    });
    return arr;
  };

  const handleClearSort = () => {
    const animals = clearSort();
    setName(
      animals.map((animal) => {
        return <p>{animal.name}</p>;
      })
    );
    return animals;
  };

  const priceSortAscending = () => {
    const arr = animalList.sort(function (a, b) {
      const na = a.price;
      const nb = b.price;
      if (na < nb) {
        return -1;
      }
      if (na > nb) {
        return 1;
      }
      return 0;
    });
    return arr;
  };

  const handlePriceAscending = () => {
    const animals = priceSortAscending();
    setName(
      animals.map((animal) => {
        return <p>{animal.price}</p>;
      })
    );
    return animals;
  };

  const priceSortDescending = () => {
    const arr = animalList.sort(function (a, b) {
      const na = a.price;
      const nb = b.price;
      if (na > nb) {
        return -1;
      }
      if (na < nb) {
        return 1;
      }
      return 0;
    });
    return arr;
  }

  const handlePriceDescending = () => {
    const animals = priceSortDescending();
    setName(
      animals.map((animal) => {
        return <p>{animal.price}</p>;
      })
    );
    return animals;
  };

  const nameSort = () => {
    const nameArr = animalList.sort(function (a, b) {
      const na = a.name.toLowerCase();
      const nb = b.name.toLowerCase();
      if (na < nb) {
        return -1;
      }
      if (na > nb) {
        return 1;
      }
      return 0;
    });
    return nameArr;
  };

  const handleName = () => {
    const animals = nameSort();
    setName(
      animals.map((animal) => {
        return <p>{animal.name}</p>;
      })
    );
    return animals;
  };

  //   const difficultySort = () => {
  //     const difficultyArr = animalList.sort(function (a, b) {
  //       const difficulty1 = a.CareDifficulty;
  //       const difficulty2 = b.CareDifficulty;
  //       if (difficulty1 === "easy" && difficulty2 === "medium") {
  //         return -1;
  //       }
  //       if (difficulty1 === "medium" && difficulty2 === "hard") {
  //         return 1;
  //       }
  //       if (difficulty1 === "hard" && difficulty2 === "easy") return 0;
  //     });
  //     return difficultyArr;
  //   };

  //   const handleDifficulty = () => {
  //     const animals = difficultySort();
  //     setDifficulty(
  //       animals.map((animal) => {
  //         return <p>{animal.CareDifficulty}</p>;
  //       })
  //     );
  //     return animals;
  //   };

  return (
    <>
      <div className="Search">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="Sort">
        <button onClick={handleClearSort}>Reset to Default</button>
        <button onClick={handleName}>Sort by Name 0 - Z</button>
        <button onClick={handlePriceAscending}>Sort by Price ↓</button>
        <button onClick={handlePriceDescending}>Sort by Price ↑</button>
        {/* <button onClick={handleDifficulty}>Sort by Difficulty ↓</button> */}
      </div>
    </>
  );
};

export default Sort;
