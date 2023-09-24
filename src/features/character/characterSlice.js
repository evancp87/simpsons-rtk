import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  simpsons: [],
  deleteCharacter: {},
  likes: {},
};

export const setSimpsons = createAsyncThunk(
  "character/setSimpsons",
  async () => {
    try {
      const response = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      const uniqueCharacters = [];
      const characterNames = new Set();

      response.data.forEach((element) => {
        // Check if the character name is not already in the characterNames set
        if (!characterNames.has(element.character)) {
          uniqueCharacters.push({
            ...element,
            liked: false,
          });
          characterNames.add(element.character);
        }
      });

      return uniqueCharacters;
    } catch (error) {
      console.log("The error is:", error);
      throw error;
    }
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    deleteCharacter: (state, action) => {
      const indexOf = state.simpsons.findIndex(
        (item) => item.character === action.payload
      );
      console.log("the indexOf is:", indexOf);
      state.simpsons.splice(indexOf, 1);
    },
    likes: (state, action) => {
      const indexOfLike = state.simpsons.findIndex(
        (char) => char.id === action.payload
      );
      const updatedCharacter = {
        ...state.simpsons[indexOfLike],
        liked: !state.simpsons[indexOfLike].liked,
      };
      state.simpsons[indexOfLike] = updatedCharacter;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(setSimpsons.fulfilled, (state, action) => {
      state.simpsons = action.payload;
    });
  },
});

export const { deleteCharacter, likes, data } = characterSlice.actions;

export const selectDelete = (state) => state.character.deleteCharacter;
export const selectData = (state) => state.character.simpsons;
export const selectLikes = (state) => state.character.likes;
export default characterSlice.reducer;
