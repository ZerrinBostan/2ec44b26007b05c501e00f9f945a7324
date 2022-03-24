import { Icon } from "@iconify/react";

const Banner = ({ onInput }) => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Innovative Product</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <Icon icon="ep:search" style={{ fontSize: '24px' }} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="basic-addon1" onInput={(e) => onInput(e.target.value)}/>
                </div>
            </div>
        </div>
    );
};
export default Banner;