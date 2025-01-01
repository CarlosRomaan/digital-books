"use client"

import { useState } from "react";
import { filterCategories } from "@/constants";
import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from "next/navigation";

const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (name: string) => {
    let newUrl = "";

    if (active === name) {
      setActive("");

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
        value: null
      })

    } else {
      setActive(name);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: name.toLowerCase()
      })
    }
    router.push(newUrl, { scroll: false });
  }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {filterCategories.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => handleFilter(name)}
          className={`${active === name ? 'gradient_blue-purple' : ''} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {name}
        </button>
      ))}
    </ul>
  );
}

export default Filters;