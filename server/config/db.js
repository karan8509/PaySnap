import { connect } from "mongoose";

  export const ConnectionTOdb = async () => {
  try {
    await connect("mongodb://localhost:27017");
    console.log("SucessFully on");
  } catch (error) {
    console.log("not Connection", error.message);
  }
};