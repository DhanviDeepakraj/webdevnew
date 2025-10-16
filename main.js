const { useState } = React;

function App() {
  const [name, setName] = useState("");
  const [regNum, setRegNum] = useState("");
  const [birthday, setBirthday] = useState("");
  const [yes, setYes] = useState(false);

  // Validators
  const validName = /^[A-Za-z\s]+$/.test(name) && name.length > 0;
  const validRegNum = /^\d{9}$/.test(regNum);

  // Format date for display
  const formattedDate = birthday
    ? new Date(birthday).toLocaleDateString('en-GB')
    : "DD/MM/YYYY";

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-400 flex items-center justify-between p-2">
        <div className="w-24 h-16 flex items-center">
          {/* Logo Image without border/background */}
          <div className="w-20 h-12 flex items-center justify-center">
            <img 
              src="fulllogo.png" // Your logo filename
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
        <span className="text-black text-base mr-4">
          Dhanvi D, 240968029, 9611488573
        </span>
      </div>

      <div className="flex justify-center items-start pt-10">
        {/* Left Section */}
        <form className="bg-black flex flex-col gap-6 px-4 py-8 w-[600px]">
          <div>
            <label className="text-white text-lg block">
              Enter Name
              <span className="block text-sm text-gray-300">(Should be letters only)</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`mt-2 w-full px-4 py-2 rounded bg-gray-500 text-white outline-none ${
                name && !validName ? "border-2 border-red-500" : ""
              }`}
              autoComplete="off"
              disabled={yes}
            />
          </div>
          <div>
            <label className="text-white text-lg block">
              Enter Reg Number
              <span className="block text-sm text-gray-300">(Should be 9 numbers only)</span>
            </label>
            <input
              type="text"
              value={regNum}
              onChange={e => /^\d{0,9}$/.test(e.target.value) && setRegNum(e.target.value)}
              maxLength="9"
              className={`mt-2 w-full px-4 py-2 rounded bg-gray-500 text-white outline-none ${
                regNum && !validRegNum ? "border-2 border-red-500" : ""
              }`}
              autoComplete="off"
              disabled={yes}
            />
          </div>
          <div>
            <label className="text-white text-lg block mb-2">
              Enter birthday
              <span className="block text-sm text-gray-300">(DD/MM/YYYY)</span>
            </label>
            <input
              type="date"
              value={birthday}
              onChange={e => setBirthday(e.target.value)}
              className="px-4 py-2 rounded bg-gray-500 text-white w-full"
              disabled={yes}
            />
          </div>
          <div>
            <label className="text-white text-lg block mb-2">
              Is webdev the best domain? :)
            </label>
            {!yes ? (
              <div className="flex gap-4 items-center">
                <button type="button"
                  className="bg-green-400 text-black rounded-lg px-8 py-3 font-semibold text-xl"
                  onClick={() => setYes(true)}>
                  YES
                </button>
                <button type="button"
                  className="bg-red-500 text-black rounded-lg px-8 py-3 font-semibold text-xl">
                  NO
                </button>
              </div>
            ) : (
              <button type="button"
                className="bg-green-400 text-black rounded-lg px-8 py-3 font-semibold text-xl"
                disabled>YES</button>
            )}
          </div>
        </form>
        
        {/* Right Section */}
        <div className="bg-white rounded-lg shadow-lg px-10 py-12 min-w-[500px] ml-8">
          <div className="text-xl font-semibold mb-4">MIST Mancomm Member 69</div>
          <div className="mb-4">
            My name is <span className="font-medium">{name}</span>
          </div>
          <div className="mb-4">
            My registration number is <span className="font-medium">{regNum}</span>
          </div>
          <div className="mb-6">
            My birthday is on <span className="font-medium">{formattedDate}</span>
          </div>
          <div className="text-lg mb-2">
            Is webdev the best domain? :)
          </div>
          <div className="flex flex-col gap-4 items-center mt-4">
            <button type="button"
              className="bg-green-400 text-black rounded-full px-16 py-5 font-semibold text-xl"
              disabled>YES</button>
            {!yes && (
              <button type="button"
                className="bg-red-500 text-black rounded-full px-16 py-5 font-semibold text-xl"
                disabled>NO</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
