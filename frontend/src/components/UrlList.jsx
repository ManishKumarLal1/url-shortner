import UrlCard from "./UrlCard";

export default function UrlList({ urls }) {
  return (
    <div className="mt-6 space-y-4">
      {urls.length === 0 ? (
        <p className="text-gray-500 text-center">No URLs shortened yet.</p>
      ) : (
        urls.map((u, index) => (
          <UrlCard key={index} original={u.originalUrl} short={u.shortUrl} />
        ))
      )}
    </div>
  );
}
