import { AlertCircle } from "lucide-react";

const DisclaimerBanner = () => {
  return (
    <div className="bg-olive/10 border-t border-b border-olive/20 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="w-4 h-4 text-olive flex-shrink-0" />
          <p className="text-center">
            <span className="font-medium text-olive">Importante:</span> Este espacio no reemplaza una consulta profesional, 
            pero puede acompañarte y orientarte en el proceso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
