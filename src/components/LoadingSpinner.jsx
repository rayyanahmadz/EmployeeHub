import { LoaderCircle } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center py-20">
      <LoaderCircle
        size={48}
        className="animate-spin text-blue-600"
      />
    </div>
  );
}

export default LoadingSpinner;