import { Calendar } from "lucide-react";
import { useRef } from "react";
import "../styles/selector.css";

export default function DateSelector() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.showPicker?.();
    inputRef.current?.focus();
  };

  return (
    <div className="selector" onClick={handleClick}>
      <input ref={inputRef} type="date" />
      <Calendar className="date-icon" size={20} />
    </div>
  );
}
