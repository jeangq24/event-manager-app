export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404 Not Found"
        className="w-32 h-32 md:w-48 md:h-48 mb-6"
      />
      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">404 - Página no encontrada</h1>
      <p className="text-base md:text-lg text-gray-600 text-center max-w-md">
        Lo sentimos, la página que buscas no existe o el evento no fue encontrado.
      </p>
    </div>
  );
}   