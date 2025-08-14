import toast from "react-hot-toast";

export default function UrlCard({ original, short }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(short);
    toast.success("Short URL copied!");
  };

  return (
    <div className="bg-gray-50 shadow-md rounded-lg p-4 flex flex-col md:flex-row justify-between items-center gap-3">
      <div className="flex flex-col">
        <span className="text-sm text-gray-500 truncate">{original}</span>
        <a href={short} target="_blank" rel="noreferrer" className="text-blue-600">
          {short}
        </a>
      </div>
      <button
        onClick={copyToClipboard}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
      >
        Copy
      </button>
    </div>
  );
}
