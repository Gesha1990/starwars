'use client';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';

export const Pagination = ({
  numberOfPages,
  pageNumber
}: {
  numberOfPages: number;
  pageNumber: string;
}) => {
  const router = useRouter();
  const handlePageClick = (event: { selected: number }): void => {
    router.push(`${++event.selected}`);
    router.refresh();
  };
  return (
    <ReactPaginate
      forcePage={Number(pageNumber) - 1}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageCount={numberOfPages}
      previousLabel="< previous"
      className="pagination"
    />
  );
};
