
import { Check, AlertCircle } from "lucide-react";

const Toast = ({ toast }) => {
  if (!toast) return null;
  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg font-semibold text-sm ${
          toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {toast.type === "success" ? <Check size={18} /> : <AlertCircle size={18} />}
        {toast.message}
      </div>
    </div>
  );
};

export default Toast;
