import { FaStar } from "react-icons/fa6";

interface StarProps {
  inactive?: string;
}

export const Star = ({ inactive }: StarProps) => {
  return (
    <>
      {
        <FaStar
          className={`text-primary {${inactive === "1" && " opacity-25"}`}
        />
      }
    </>
  );
};

export default Star;
