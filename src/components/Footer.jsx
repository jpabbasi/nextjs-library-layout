export default function Footer() {
    return (
        <footer className="bg-gray-500 text-gray-300 py-2">
            <div className="container mx-auto px-4 text-center text-sm">
                <p>© {new Date().getFullYear()} Analytics Asset Library by Pedro Abbasi</p>
            </div>
        </footer>
    );
}