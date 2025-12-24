import { useState } from "react";
import { CreditCard, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
  };
}

const PaymentModal = ({ isOpen, onClose, plan }: PaymentModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (method: "card" | "paypal") => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`¡Gracias por tu compra del paquete ${plan.name}!`, {
        description: "Recibirás un correo con los detalles de acceso.",
      });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">
            Pagar Paquete {plan.name}
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <div className="text-center mb-6">
            <p className="text-3xl font-bold text-foreground">{plan.price}</p>
            <p className="text-muted-foreground">Pago único</p>
          </div>

          <div className="space-y-4">
            {/* Credit/Debit Card Option */}
            <Button
              variant="outline"
              className="w-full h-14 justify-start gap-4 hover:border-primary"
              onClick={() => handlePayment("card")}
              disabled={isProcessing}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium">Tarjeta de Crédito/Débito</p>
                <p className="text-xs text-muted-foreground">Visa, Mastercard, American Express</p>
              </div>
            </Button>

            {/* PayPal Option */}
            <Button
              variant="outline"
              className="w-full h-14 justify-start gap-4 hover:border-[#0070ba]"
              onClick={() => handlePayment("paypal")}
              disabled={isProcessing}
            >
              <div className="w-10 h-10 bg-[#0070ba] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <div className="text-left">
                <p className="font-medium">PayPal</p>
                <p className="text-xs text-muted-foreground">Pago seguro con PayPal</p>
              </div>
            </Button>
          </div>

          {isProcessing && (
            <div className="mt-6 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Procesando pago...</p>
            </div>
          )}

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              🔒 Pago seguro. Tus datos están protegidos con encriptación de nivel bancario.
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Moneda: Colones costarricenses (₡)
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
