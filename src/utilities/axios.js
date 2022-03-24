import axios from 'axios'

export const logIn = async (email, password) => {
    try {
      const response = await axios({
        url: "/api/auth",
        method: "POST",
        data: { email, password },
      });
      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  };

export const signUp = async (email, password, moveInDate, postcode, address, furnished) =>{
    try {
        const response = await axios({
          url: "/api/users",
          method: "POST",
          data: { email, password, moveInDate, postcode, address, furnished },
        });
        return response.data;
      } catch (err) {
        throw err.response.data;
      }
}

export const getRoomsByUserID = async(id)=>{
  try {
    const response = await axios({
      url: `/api/rooms/${id}`,
      method: "GET",
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getAllBoxes = async(id)=>{
  try {
    const response = await axios({
      url: `/api/boxes/${id}`,
      method: "GET",
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}