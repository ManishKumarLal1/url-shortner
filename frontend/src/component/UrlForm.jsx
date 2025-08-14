import { useState } from "react";
import toast from "react-hot-toast";

export default function UrlForm({ onShorten }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }
    onShorten(url);
    setUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 flex gap-3"
    >
      <input
        type="text"
        placeholder="Enter your URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        Shorten
      </button>
    </form>
  );
}
