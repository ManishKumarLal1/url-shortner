export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} ShortLink — All Rights Reserved
      </div>
    </footer>
  );
}
