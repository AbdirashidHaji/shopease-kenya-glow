
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Product } from "@/data/products";

const phoneRegex = /^(?:254|\+254|0)?(7[0-9]{8})$/;

const mpesaFormSchema = z.object({
  phoneNumber: z.string()
    .regex(phoneRegex, { message: "Please enter a valid Kenyan phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" })
});

type MPesaPaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  quantity: number;
};

export const MPesaPaymentModal = ({ 
  isOpen, 
  onClose, 
  product, 
  quantity 
}: MPesaPaymentModalProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<z.infer<typeof mpesaFormSchema>>({
    resolver: zodResolver(mpesaFormSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const totalPrice = quantity * product.price * (1 - (product.discount || 0) / 100);
  
  const onSubmit = async (values: z.infer<typeof mpesaFormSchema>) => {
    setIsProcessing(true);
    
    // Format phone number to ensure it starts with 254
    let formattedNumber = values.phoneNumber;
    if (formattedNumber.startsWith('0')) {
      formattedNumber = '254' + formattedNumber.substring(1);
    } else if (!formattedNumber.startsWith('254') && !formattedNumber.startsWith('+254')) {
      formattedNumber = '254' + formattedNumber;
    }
    
    // Mock API call to M-Pesa
    try {
      // In a real app, this would be an API call to your backend which
      // would then initiate an STK push via the M-Pesa API
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
      
      setIsProcessing(false);
      setIsSuccess(true);
      
      toast({
        title: "Payment request sent!",
        description: "Please check your phone and enter your M-Pesa PIN to complete the payment.",
      });
      
      // In a real implementation, you would track the payment status
      // from your backend and update the UI accordingly
    } catch (error) {
      setIsProcessing(false);
      toast({
        title: "Payment request failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const resetAndClose = () => {
    form.reset();
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>M-Pesa Payment</DialogTitle>
          <DialogDescription>
            Pay securely using M-Pesa for your purchase.
          </DialogDescription>
        </DialogHeader>
        
        {!isSuccess ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Order Summary</h3>
                <div className="bg-muted p-3 rounded-md">
                  <div className="flex justify-between mb-1">
                    <span>{product.name} x {quantity}</span>
                    <span>KSh {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                    <span>Total</span>
                    <span>KSh {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>M-Pesa Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 0712345678" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the phone number registered with M-Pesa.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={resetAndClose} 
                  type="button"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Pay KSh " + totalPrice.toLocaleString()}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        ) : (
          <div className="space-y-6 py-4">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center mb-1">Payment Request Sent!</h3>
              <p className="text-sm text-muted-foreground text-center">
                Check your phone for the M-Pesa prompt and enter your PIN to complete the purchase.
              </p>
            </div>
            
            <Button onClick={resetAndClose} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
