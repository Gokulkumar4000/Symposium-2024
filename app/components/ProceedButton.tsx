import React, { useState } from 'react';

interface ProceedButtonProps {
  disabled: boolean;
}

const ProceedButton: React.FC<ProceedButtonProps> = ({ disabled }) => {
  const [upiLink, setUpiLink] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!disabled) {
      try {
        // Make a request to the Express backend running on port 5000
        const response = await fetch('http://localhost:5000/generate-upi-link', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 1.00 }), // Example amount
        });

        const data = await response.json();
        setUpiLink(data.upiLink);

        // Redirect to UPI deep link
        if (data.upiLink) {
          window.location.href = data.upiLink; // This opens the UPI app
        }
      } catch (error) {
        console.error('Error generating UPI link:', error);
      }
    }
  };

  return (
    <div className="flex justify-center py-5">
      <button
        disabled={disabled}
        onClick={handlePayment} // Trigger the payment on button click
        className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 ${
          disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#2884e6] text-white'
        } text-base font-bold leading-normal tracking-[0.015em] grow`}
      >
        <span className="truncate">Proceed to Pay</span>
      </button>
    </div>
  );
};

export default ProceedButton;
