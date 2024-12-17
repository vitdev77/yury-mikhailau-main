import { Star } from "@/app/[locale]/components/star";

interface StarsProps {
  count?: string;
}

export default function Stars({ count }: StarsProps) {
  return (
    <div className="flex flex-row items-center gap-0.5">
      {count === "5" && (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </>
      )}
      {count === "4" && (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star inactive="1" />
        </>
      )}
      {count === "3" && (
        <>
          <Star />
          <Star />
          <Star />
          <Star inactive="1" />
          <Star inactive="1" />
        </>
      )}
      {count === "2" && (
        <>
          <Star />
          <Star />
          <Star inactive="1" />
          <Star inactive="1" />
          <Star inactive="1" />
        </>
      )}
      {count === "1" && (
        <>
          <Star />
          <Star inactive="1" />
          <Star inactive="1" />
          <Star inactive="1" />
          <Star inactive="1" />
        </>
      )}
      {count === "0" && (
        <>
          <Star inactive="1" />
          <Star inactive="1" />
          <Star inactive="1" />
          <Star inactive="1" />
          <Star inactive="1" />
        </>
      )}
    </div>
  );
}
