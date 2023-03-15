import { Trash } from "phosphor-react";

export function Task() {
  return (
    <article className="bg-gray-500 p-4 rounded-lg border-gray-400 border-[1px] w-[736px] flex justify-between">
      <div className="flex gap-3">
        <input type="checkbox" />
        <span className="w-[632px] text-gray-100">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      </div>
      <button className="h-fit hover:text-red-500">
        <Trash size={14} className="m-[5px] " />
      </button>
    </article>
  );
}
