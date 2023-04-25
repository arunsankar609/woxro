import { useEffect, useState } from "react";
import axios from "axios"
import { Link,useNavigate} from "react-router-dom";
import MyLoader from "../resusables/MyLoader";

function AdminPanel() {
    const navigate=useNavigate();
    const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState("");
  const [address, setaddress] = useState("");
  const [content, setContent] = useState("");
  const[id,setId]= useState("");
  useEffect(()=>{
    getAllData()
},[])
const getAllData=async()=>{
   await axios.get('http://localhost:8080/api/v1/contentupdation/addlocation/')
   .then(response => {
    console.log(response.data[0]);
    setNumber(response.data[0].number)
    setaddress(response.data[0].location)
    setContent(response.data[0].caption)
    setId(response.data[0]._id)
    console.log("iddddd",id);
  })
  .catch(error => {
    console.error(error);
  });
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({ number, address, content });
    const data = {
        caption: content,
        location:address,
        number: number
      };
      setIsLoading(true)
    await axios.post('http://localhost:8080/api/v1/contentupdation/addlocation/'+id, data)
        .then(response => {
            setIsLoading(false)
          console.log(response.data);
          navigate('/')
        })
        .catch(error => {
          console.error(error);
        });
  };

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center bg-black h-screen">
          <MyLoader/>
        </div>
      )}
    <form onSubmit={handleSubmit} className="w-full mx-auto min-h-[100vh] p-2 m-3">
        <div className="flex justify-between">
        <p className="font-bold text-2xl">AdminPanel</p>
        <Link to="/"> <button className='p-2 m-2 bg-black text-white rounded-md'>Home</button></Link>

        </div>
        
      <div className="mb-4">
        <label htmlFor="number" className="block text-gray-700 font-bold mb-2">
          Number
        </label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="caption" className="block text-gray-700 font-bold mb-2">
          location
        </label>
        <input
          type="text"
          id="caption"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Banner Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      
      </div>
    </form>
    </>
  );
}

export default AdminPanel;
