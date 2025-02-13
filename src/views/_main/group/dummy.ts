import axios from 'axios';


const dummy = {
  async getAll(){
    return await axios.get('https://dummyjson.com/users')
  }
}

export default dummy;