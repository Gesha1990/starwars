'use client';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';

export const Pagination = ({ numberOfPages }: { numberOfPages: number }) => {
  const router = useRouter();
  const handlePageClick = (event: { selected: number }): void => {
    router.push(`${event.selected++}`);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageCount={numberOfPages}
      previousLabel="< previous"
      className="pagination"
    />
  );
};
