import axios from 'axios';


export const RegisterUser = async (
  email: string,
  name: string,
  password: string
) => {

  try {
    const response = await axios.post('http://localhost:8080/auth/register', {
        email: email,name: name,password: password,
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }


};


export const LogInUser = async (
  email: string,
  password: string
) => {

  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
        email: email,password: password,
    });

    console.log('LoginData:', response.data);
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }


};