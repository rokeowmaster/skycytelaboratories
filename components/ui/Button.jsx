export default function Button({ children, className, onClick }) {
    return (
      <button
        className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  