import "../styles/output.css";
import { GoFlame } from "react-icons/go";


function App() {
  return (
    <div className="flex flex-col items-start justify-center h-screen p-20 bg-gray-900">
      <h1 className="pb-5 text-5xl font-bold text-white border-b-4">Boilerplate ✨</h1>
      <h1 className="flex items-center pt-2 text-2xl text-white">
        React + Tailwind + React Icons = <span className="ml-2 text-yellow-500"><GoFlame /></span>
      </h1>
      <div className="mt-5 text-lg text-gray-400">
        <p>🔹 To learn React, check out the <a href="https://reactjs.org/" className="text-blue-300 hover:text-blue-400">React documentation</a></p> 
        <p>🔹 To learn <span className="font-medium">TailwindCSS</span>, check out the <a href="https://tailwindcss.com/docs" className="text-blue-300">TailwindCSS documentation</a> ➡️ A <span className="font-medium">cheatsheet</span> is also available to help you use <a href="https://tailwindcomponents.com/cheatsheet/" className="text-blue-300 hover:text-blue-400">TailwindCSS</a> 😎</p> 
        <p>🔹 To learn how to use <span className="font-medium">React Icons</span>, check out the <a href="https://react-icons.github.io/react-icons" className="text-blue-300 hover:text-blue-400">React Icons documentation</a></p> 
      </div>
      <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-indigo-500">
        Hello Friends 👋
      </button>
    </div>
  );
}
 
export default App;
