import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, LogIn } from "lucide-react";
import { useLocation } from "wouter";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    onClose();
    setLocation("/login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-auth">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl" data-testid="text-dialog-title">
            Sign In Required
          </DialogTitle>
          <DialogDescription className="text-center" data-testid="text-dialog-description">
            Please sign in to add products to your cart and continue shopping
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <Button
            onClick={handleLogin}
            className="w-full"
            size="lg"
            data-testid="button-login"
          >
            <LogIn className="h-5 w-5 mr-2" />
            Sign In / Sign Up
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            You'll be able to sign in with Google, GitHub, email, or other options
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
