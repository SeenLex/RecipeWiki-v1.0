"use client";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Cards } from "./components/cards/Cards";
import { Sidebar } from "./components/sidebar/Sidebar";
import { db } from "./firebase";
import { useEffect, useState } from "react";

export default function Homepage() {
  // get all recipes from a collection
  // const q = query(collection(db, "recipes"));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  // get a single recipe
  // const docRefGetOne = doc(db, "recipes", "recipe-1");
  // const docSnapGetOne = await getDoc(docRefGetOne);

  // if (docSnapGetOne.exists()) {
  //   console.log("Get a single recipe: ", docSnapGetOne.data());
  // } else {
  //   console.log("No such document!");
  // }

  // create a single recipe
  // await setDoc(doc(db, "recipes", "recipe-3"), {
  //   test: "valoare recipe 3"
  // });

  // update a single recipe
  // const recipeRef = doc(db, "recipes", "recipe-2");
  // await updateDoc(recipeRef, {
  //   test: "valorea noua a lui recipe 2"
  // })

  // delete a single recipe
  // await deleteDoc(doc(db, "recipes", "recipe-3"));
  // const [recipes, setRecipes] = useState();
  // const baseLink = "https://api.edamam.com/api/recipes/v2";
  // const app_id = "77ab4532";
  // const app_key = "9b2df32292418d119f55ecb45f2d48d3";

  // useEffect(() => {
  //   const searchRecipes = async (query) => {
  //     const response = await fetch(
  //       `${baseLink}?` +
  //         new URLSearchParams({
  //           q: query,
  //           app_id: app_id,
  //           app_key: app_key,
  //           type: "public",
  //         }),
  //       {
  //         method: "GET",
  //       }
  //     );
  //     try {
  //       const recipes = await response.json();
  //       console.log(recipes.hits)
  //       setRecipes(recipes.hits);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   searchRecipes("chicken fritz recipes");
  // }, []);

  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <Cards />
    </div>
  );
}
