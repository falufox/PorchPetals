import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { CreditCard, Lock } from 'lucide-react';

// This should be your publishable key from Stripe Dashboard
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo');

interface StripeCheckoutFormProps {
  amount: number;
  onSuccess: (paymentIntent: any) => void;
  onError: (error: string) => void;
  loading?: boolean;
}

const StripeCheckoutForm: React.FC<StripeCheckoutFormProps> = ({
  amount,
  onSuccess,
  onError,
  loading = false
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardError, setCardError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    setIsProcessing(true);
    setCardError('');

    try {
      // In a real app, you'd create a PaymentIntent on your backend
      // For demo purposes, we'll simulate the flow
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setCardError(error.message || 'An error occurred');
        onError(error.message || 'Payment failed');
      } else {
        // Simulate successful payment
        onSuccess({ 
          id: 'pi_demo_' + Date.now(),
          status: 'succeeded',
          amount: amount * 100,
          payment_method: paymentMethod.id
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment failed';
      setCardError(errorMessage);
      onError(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#374151',
        fontFamily: 'Inter, system-ui, sans-serif',
        '::placeholder': {
          color: '#9CA3AF',
        },
        iconColor: '#6B7280',
      },
      invalid: {
        color: '#EF4444',
        iconColor: '#EF4444',
      },
    },
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-sage-700 mb-2">
          <CreditCard className="w-4 h-4 inline mr-2" />
          Card Information
        </label>
        <div className="input-field p-4">
          <CardElement 
            options={cardElementOptions}
            onChange={(e) => {
              if (e.error) {
                setCardError(e.error.message);
              } else {
                setCardError('');
              }
            }}
          />
        </div>
        {cardError && (
          <p className="text-red-600 text-sm mt-1">{cardError}</p>
        )}
      </div>

      <div className="bg-sage-50 border border-sage-200 rounded-lg p-3">
        <div className="flex items-center text-sm text-sage-600">
          <Lock className="w-4 h-4 mr-2" />
          <span>Your payment information is secure and encrypted</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing || loading}
        className={`w-full py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${
          (!stripe || isProcessing || loading)
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'btn-primary shadow-lg hover:shadow-xl'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Processing...
          </div>
        ) : (
          `Pay $${amount}`
        )}
      </button>
    </form>
  );
};

interface StripeCheckoutProps {
  amount: number;
  onSuccess: (paymentIntent: any) => void;
  onError: (error: string) => void;
  loading?: boolean;
}

export const StripeCheckout: React.FC<StripeCheckoutProps> = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeCheckoutForm {...props} />
    </Elements>
  );
};