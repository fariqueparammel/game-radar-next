// import epicStoreApi from "./epicStoreApi";
"use client";
interface RedeemButtonProps {
  gameUrl: string;
}
export default function RedeemButton({ gameUrl }: RedeemButtonProps) {
  //   async function handleButton() {
  //     const data = await epicStoreApi();
  //     console.log(data);
  //   }

  return (
    <button
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
      onClick={() => (location.href = gameUrl)}
    >
      Redeem
    </button>
  );
}
