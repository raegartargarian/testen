// src/shared/components/PurchaseModal.tsx
import { Button } from "@/components/ui/button";
import { GlobalSelectors } from "@/containers/global/selectors";
import { globalActions } from "@/containers/global/slice";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const PurchaseModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(GlobalSelectors.isPurchaseModalOpen);
  const movieData = useSelector(GlobalSelectors.movieData);
  const [fractionCount, setFractionCount] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClose = () => {
    dispatch(globalActions.setIsPurchaseModalOpen(false));
    setFractionCount(1);
  };

  const handleIncrease = () => {
    if (movieData && fractionCount < movieData.movieInfo.availableFractions) {
      setFractionCount((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (fractionCount > 1) {
      setFractionCount((prev) => prev - 1);
    }
  };

  const handlePurchase = async () => {
    if (!movieData || !window.ethereum) {
      alert("MetaMask not detected. Please install MetaMask to proceed.");
      return;
    }

    setIsProcessing(true);

    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const totalPrice = fractionCount * movieData.movieInfo.pricePerFraction;
      const priceInWei = (totalPrice * Math.pow(10, 18)).toString(); // Convert ETH to Wei

      // Mock transaction parameters for demo
      const transactionParameters = {
        to: "0x742d35Cc6634C0532925a3b8D8fA3b1E0a8eb942", // Demo recipient address
        from: window.ethereum.selectedAddress,
        value: "0x" + parseInt(priceInWei).toString(16), // Convert to hex
        gas: "0x5208", // 21000 gas limit (standard transfer)
        gasPrice: "0x59682F00", // 1.5 Gwei
        data: "0x", // No data for simple transfer
      };

      // Send transaction
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      console.log("Transaction Hash:", txHash);

      // Show success message
      alert(
        `Purchase successful! You have purchased ${fractionCount} fractions of Following Harry. Transaction Hash: ${txHash}`
      );

      handleClose();
    } catch (error: any) {
      console.error("Transaction failed:", error);

      if (error.code === 4001) {
        alert("Transaction rejected by user.");
      } else {
        alert("Transaction failed. Please try again.");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen || !movieData) return null;

  const totalPrice = fractionCount * movieData.movieInfo.pricePerFraction;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black mb-2">
            Purchase Movie Fractions
          </h2>
          <p className="text-gray-600">
            Own a piece of "Following Harry" - an intimate documentary about
            Harry Belafonte's legacy.
          </p>
        </div>

        {/* Movie Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-black mb-2">Following Harry</h3>
          <p className="text-sm text-gray-600 mb-2">
            Directed by Susanne Rostock
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Total Fractions:</span>
              <span className="font-semibold text-black ml-1">
                {movieData.movieInfo.totalFractions.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Available:</span>
              <span className="font-semibold text-black ml-1">
                {movieData.movieInfo.availableFractions.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Fraction Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Fractions
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrease}
              disabled={fractionCount <= 1}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4 text-slate-800" />
            </button>
            <div className="text-center min-w-[60px]">
              <span className="text-2xl font-bold text-black">
                {fractionCount}
              </span>
            </div>
            <button
              onClick={handleIncrease}
              disabled={fractionCount >= movieData.movieInfo.availableFractions}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4 text-slate-800" />
            </button>
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-yellow-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-gray-600">Price per fraction:</span>
            <span className="font-semibold text-black">
              {movieData.movieInfo.pricePerFraction} ETH
            </span>
          </div>
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-gray-600">Quantity:</span>
            <span className="font-semibold text-black">{fractionCount}</span>
          </div>
          <div className="border-t border-yellow-200 pt-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-black">Total:</span>
              <span className="font-bold text-xl text-yellow-600">
                {totalPrice.toFixed(4)} ETH
              </span>
            </div>
          </div>
        </div>

        {/* Purchase Button */}
        <Button
          onClick={handlePurchase}
          disabled={isProcessing}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg disabled:opacity-50"
        >
          {isProcessing ? "Processing..." : "Purchase with MetaMask"}
        </Button>
      </div>
    </div>
  );
};
