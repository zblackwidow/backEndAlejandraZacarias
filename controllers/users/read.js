import User from "../../models/User.js";

// le estamos pidiendo que devuelva todos los usuarios
let AllUsers = async (request, response) => {
  try {
    let all = await User.find();
    return response.status(200).json({ response: all });
  } catch (error) {
    return response.status(500).json({ response: error });
  }
}

// filtramos los usuarios por el rol
let usersByRole = async (request, response) => {
  try {
    // le estamos pidiendo que nos ingrese el parametro x en la url
    let roleUser = request.params.x; // ej /role/2 y nos trae las personas con el rol 2
    let all = await User.find({role: roleUser});
    return response.status(200).json({ response: all });
  } catch (error) {
    return response.status(500).json({ response: error });
  }
}


export { AllUsers, usersByRole} 