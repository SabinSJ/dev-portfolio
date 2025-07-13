export default function DownloadButton() {
  return (
    <a
      href="/cv.pdf"
      download
      className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      Descarcă CV
    </a>
  )
}
