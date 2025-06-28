export default function Loader() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16 sm:py-24">
            <svg
                className="animate-spin h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
            </svg>
            <span className="text-base sm:text-lg text-gray-600 font-medium">
                Cargando...
            </span>
        </div>
    );
}