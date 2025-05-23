import RedeemButton from "./redeemButton";
interface CardDisplayProps {
  gameName: string;
  gameDescription: string;
  src: string;
  alt: string;
  validTill: string;
  gameUrl: string;
}
export default function CardDisplay({
  gameName,
  gameDescription,
  src,
  alt,
  validTill,
  gameUrl,
}: CardDisplayProps) {
  return (
    <div className="max-w-md mx-auto mb-3 bg-white rounded-lg shadow-md overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto" />
      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-900">{gameName}</h5>
        <p className="text-sm text-gray-700 mt-1">{gameDescription}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xs text-gray-500 mb-0">
            <small>{validTill}</small>
          </p>
          <RedeemButton gameUrl={gameUrl} />
        </div>
      </div>
    </div>
  );
}
