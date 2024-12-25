/* eslint-disable */
interface CircularProgressBarProps {
  percentage: number;
  type: string;
}
export default function CircularProgressBar({percentage, type}: CircularProgressBarProps) {
  const score = percentage / 10; // Convert percentage to score (e.g., 85 -> 8.5)

  // Function to determine the stroke color based on the score
  const getStrokeColor = (score: number): string => {
    if (score > 7) return "#62b299"; // Greenish for scores >= 7
    if (score > 5) return "#f9c74f"; // Yellowish for scores >= 5 and < 7
    return "#f94144"; // Reddish for scores < 5
  };
  
  const strokeColor = getStrokeColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          width="50"
          height="50"
          viewBox="0 0 36 36"
          className="block"
        >
          {/* Background circle */}
          <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={strokeColor} // Dynamic color based on score
            strokeWidth="2"
            strokeDasharray={`${percentage}, 100`}
            strokeLinecap="round"
          />
        </svg>
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{score}</span>
        </div>
      </div>
      {/* Label */}
      <span className="text-xs text-gray-600 mt-1">{type}</span>
    </div>
  );
}
