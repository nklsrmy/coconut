import "../styles/selector.css";
import { ChevronDown } from "lucide-react";

export default function StationSelector() {
  return (
    <div className="selector">
      <select>
        <option value="">Station</option>
        <option></option>
        <option></option>
        <option></option>
      </select>

      <ChevronDown className="chevron" size={24}/>
    </div>
  );
}
