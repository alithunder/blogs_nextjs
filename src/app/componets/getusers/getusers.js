
const Getusers = async (id) => {
const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts/${id}');


  return response.json()
}

export default Getusers