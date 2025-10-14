export function Card({ children, className }) {
    return (
      <div className={`bg-white shadow-lg rounded-xl p-6 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  