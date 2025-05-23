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
      className="btn btn-success"
      onClick={() => (location.href = gameUrl)}
    >
      Redeem
    </button>
  );
}
