"use client";

import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
        className="bg-red-600 pag-btn text-white px-4 py-2 rounded-md"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        className="bg-red-600 pag-btn text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
