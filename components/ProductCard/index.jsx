import Link from 'next/link';
import PropTypes from 'prop-types';

const ProductCard = ({ data, ...props }) => {
    return (
        <div className="card-deck">
            {data.map((item, index) => {
                return (
                    <div className="card border text-center  placeholder-glow mb-5 " key={item.admin_graphql_api_id} {...props}>
                        <img className="card-img-top" src={item.image.src} alt="Product List" height={250} />
                        <div className='card-img-top-filter'/>
                        <div className="card-body">
                            <h5 className="card-title text-success text-uppercase">{item.title}</h5>
                            <div className='card-desc' dangerouslySetInnerHTML={{ __html: item.body_html }} />
                            <div className="badge text-primary p-3 mb-2">{`${item.variants[0].price}$`}</div>
                        </div>
                        <div className="card-footer">
                            <Link href={`products-detail/${item.id}`} passHref>
                                <h6 className='bg-dark text-white rounded my-1 p-3'> go to detail </h6>
                            </Link>
                        </div>
                    </div>
                );
            })}
        
        </div>
    )
};

ProductCard.propTypes = {
    data: PropTypes.array,
    handlePageClick: PropTypes.func,
};
export default ProductCard;