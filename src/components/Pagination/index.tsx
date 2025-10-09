import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import { type } from 'os';


type PaginationProps = {
  onChangePage: (page: number) => void;
  currentPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
  return (
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
  )
}
