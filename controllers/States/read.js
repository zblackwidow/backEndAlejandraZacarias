import States from "../../models/States.js";

let AllStates = async (request, response) => {
  try {
    let all = await States.find();
    return response.status(200).json({ response: all });
  } catch (error) {
    return response.status(500).json({ response: error });
  }
}


export default AllStates;