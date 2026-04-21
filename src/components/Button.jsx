import '../index.css';

export default function Button({ children, onClick, disabled, variant = 'primary', type = 'button' }) {

  const className = `btn btn-${variant}`;

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      className={className}
    >
      {disabled && <span className="spinner"></span>}
      {children}
    </button>
  );
}