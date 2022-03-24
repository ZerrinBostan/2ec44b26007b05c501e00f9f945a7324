import ReactPaginate from "react-paginate";
import PropTypes from 'prop-types';
import ProductCard from "../ProductCard";

const List = ({ data, handlePageClick, pageCount, ...props }) => {
    return(
        <div className="container product-list" {...props}>
            {Array.isArray(data) && (
                <ProductCard data={data}/>
            )}
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                breakLinkClassName="page-link"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                breakClassName="pagination--li"
                containerClassName="pagination"
                pageClassName="pagination--li"
                activeClassName="pagination--li-active"
                previousLabel="<"
                nextLabel=">"
                previousClassName="pagination--li previous"
                nextClassName="pagination--li next"
                disabledClassName="disabled"
            />
        </div>
    );
};

List.propTypes = {
    data: PropTypes.array,
    handlePageClick: PropTypes.func,
};

export default List;