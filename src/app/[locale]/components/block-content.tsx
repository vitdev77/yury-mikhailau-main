import Stars from "@/app/[locale]/components/stars";

interface BlockContentProps {
  variant: number;
  dateStart?: string;
  dateEnd?: string;
  position?: string;
  place?: string;
  listTitle?: string;
  listItem_1?: string;
  listItem_2?: string;
  listItem_3?: string;
  listItem_4?: string;
  listItem_5?: string;
  listItem_6?: string;
  text?: string;
  skillText?: string;
  skillStars?: string;
}

export function BlockContent({
  variant,
  dateStart,
  dateEnd,
  position,
  place,
  listTitle,
  listItem_1,
  listItem_2,
  listItem_3,
  listItem_4,
  listItem_5,
  listItem_6,
  text,
  skillText,
  skillStars,
}: BlockContentProps) {
  return (
    <>
      {variant === 1 && (
        <div className="flex flex-col md:flex-row gap-0 md:gap-4 lg:gap-6">
          <div className="w-full md:w-1/5 leading-7">
            {dateStart} <span className="text-muted-foreground">...</span>{" "}
            {dateEnd}
          </div>
          <div className="w-full md:w-4/5">
            <h3 className="font-semibold text-xl text-primary">{position}</h3>
            <h4 className="mb-2 text-muted-foreground">{place}</h4>
            <h5 className="font-semibold">{listTitle}</h5>
            {(listItem_1 ||
              listItem_2 ||
              listItem_3 ||
              listItem_4 ||
              listItem_5 ||
              listItem_6) && (
              <ul className="list-disc ml-5">
                {listItem_1 && <li>{listItem_1}</li>}
                {listItem_2 && <li>{listItem_2}</li>}
                {listItem_3 && <li>{listItem_3}</li>}
                {listItem_4 && <li>{listItem_4}</li>}
                {listItem_5 && <li>{listItem_5}</li>}
                {listItem_6 && <li>{listItem_6}</li>}
              </ul>
            )}
          </div>
        </div>
      )}
      {variant === 2 && (
        <div className="flex flex-col">
          <h5>{listTitle}</h5>
          <p className="text-primary font-semibold">
            <a href={`mailto:${text}`}>{text}</a>
          </p>
        </div>
      )}
      {variant === 21 && (
        <div className="flex flex-col">
          <h5>{listTitle}</h5>
          <p className="text-primary font-semibold">
            <a href={`tel:${text?.split(" ").join("")}`}>{text}</a>
          </p>
        </div>
      )}
      {variant === 3 && (
        <div className="flex flex-row justify-between gap-6">
          <h5>{skillText}</h5>
          <Stars count={skillStars} />
        </div>
      )}
      {variant === 4 && <div>{text}</div>}
    </>
  );
}
