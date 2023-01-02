import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton({ prevScreen }) {
  return (
    <div
      onClick={prevScreen}
      className="flex space-x-1 items-center ml-2 pb-1 w-16"
    >
      <ChevronLeftIcon width="15px" height="15px" />
      <p className="font-semibold">Back</p>
    </div>
  );
}
