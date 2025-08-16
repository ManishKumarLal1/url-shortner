import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import Footer from "./components/Footer";

export default function App() {
  const [urls, setUrls] = useState([]);

  const handleShorten = async (originalUrl) => {
    try {
      const res = await fetch(import.meta.env.BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl }),
      });
      const data = await res.json();
      setUrls((prev) => [...prev, data]);
      toast.success("URL shortened successfully!");
    } catch (error) {
      toast.error("Failed to shorten URL");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <UrlForm onShorten={handleShorten} />
        <UrlList urls={urls} />
      </main>
      <Footer />
    </div>
  );
}
