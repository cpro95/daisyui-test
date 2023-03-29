import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

type Props = {
  items: string[];
  value: string;
  onChange(val: string): void;
};

function AutoComplete(props: Props) {
  const { items, value, onChange } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className={open ? "dropdown dropdown-open w-full" : "dropdown w-full"}
      ref={ref}
    >
      <div className="flex">
        <input
          type="text"
          className="input input-bordered w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type Address..."
          tabIndex={0}
        />
        <button
          className="btn btn-outline ml-2"
          onClick={() => router.push(value)}
        >
          Go
        </button>
      </div>

      <div className="dropdown-content bg-base-200 top-14 max-h-96 overflow-auto flex-col rounded-md">
        <ul
          className="menu menu-compact"
          style={{ width: ref.current?.clientWidth }}
        >
          {items.map((item, index) => {
            return (
              <li
                key={index}
                tabIndex={index + 1}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AutoComplete;
