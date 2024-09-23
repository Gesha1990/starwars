'use client';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';

export const Pagination = () => {
  const router = useRouter();
  const handlePageClick = (event: { selected: number }): void => {
    router.push(`${event.selected++}`);
  };
  const pageCount = 8;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageCount={pageCount}
      previousLabel="< previous"
      className="pagination"
    />
  );
};
