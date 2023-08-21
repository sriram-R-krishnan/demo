const baseURL = 'http://localhost:5000'

const API = {

    get: async (endpoint) => {
      try {
        const response = await fetch(`${baseURL}${endpoint}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Error fetching data:', error);
      }
    },

    post : async(endpoint,body) =>{

        try{
            const response = await fetch(`${baseURL}${endpoint}` ,{  method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)})
            if(response.ok)
            {
                return response;
            }
        }
        catch (error) {
            throw new Error('Error fetching data:', error);
          }
    }
}


export default API