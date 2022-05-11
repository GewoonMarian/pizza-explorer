import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectUserFavPizzas } from "../store/user/selectors";
import { selectPizza } from "../store/pizzas/selectors";
// import { AddPizzaForm } from "./AddPizzaForm";
import { toggleFavorites } from "../store/user/slice";
import "./styles.scss";
export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizza);
  const favorites = useSelector(selectUserFavPizzas);
  const dispatch = useDispatch();

  console.log("favs", favorites);

  return (
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <ul className="pizzas">
        {[...pizzas]
          .sort((a, b) => b.bought - a.bought)
          .map((pizza) => (
            <li
              key={pizza.id}
              className="pizza"
              style={{ backgroundImage: `url(${pizza.image})` }}
            >
              <h1>
                {pizza.name}

                <button
                  onClick={() => dispatch(toggleFavorites(pizza.id))}
                  className={`fav-toggle ${
                    user.favorites.includes(pizza.id) ? "fav" : ""
                  }`}
                >
                  {user.favorites.includes(pizza.id) ? "♥" : "♡"}
                </button>
              </h1>

              {/* <img src={pizza.image} alt="pizza" /> */}
              <div className="overlay">
                <p>{pizza.description}</p>
                <span>
                  Bought: <strong>{pizza.bought}</strong> times!
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
