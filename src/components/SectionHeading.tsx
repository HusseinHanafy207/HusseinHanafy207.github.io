import type { ReactNode } from "react";

type Props = {
  title: string;
  action?: ReactNode;
};

export function SectionHeading({ title, action }: Props) {
  return (
    <div className="mb-12 flex flex-col gap-4 border-b border-ink pb-5 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="display text-4xl text-ink sm:text-5xl md:text-[3.25rem]">
        {title}
      </h2>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
