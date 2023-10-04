import { useState } from "react";

function Settings() {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [age, setAge] = useState(null);
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: name,
      surName: surName,
      age: age,
    };
    setUsers([...users, newUser]);
    setSurname("");
    setName("");
    setAge("null");
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4"></div>
            <div className="mx-auto max-w-[700px] ">
              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col items-center max-w-[500px] w-full mx-auto rounded-lg bg-gray-300 p-8 px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-20 h-20 scale-150 text-blue-500 absolute -top-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="flex flex-col text-gray-100 py-2">
                  <label className="font-medium text-gray-900">Adiniz</label>
                  <input
                    className="rounded-lg bg-gray-200 text-gray-700  w-80 mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col text-gray-100 py-2">
                  <label className="font-medium text-gray-900">Soyadiniz</label>
                  <input
                    className="rounded-lg bg-gray-200 w-80 text-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none"
                    type="text"
                    value={surName}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col text-gray-100 py-2">
                  <label className="font-medium text-gray-900">Yasiniz</label>
                  <input
                    className="rounded-lg bg-gray-200 w-80 text-gray-700  mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <button className="bg-blue-500 w-80 text-white hover:bg-blue-700 mt-4 p-3 rounded-full">
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Settings;
