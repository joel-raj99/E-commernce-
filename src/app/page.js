export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        Welcome to e-commerce platform!
        <div className="mt-10">
            <a href="/products" className="text-blue-500 underline">
                Browse Products
            </a>
        </div>
    </div>
    );
}