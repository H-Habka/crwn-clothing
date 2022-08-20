import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className=" h-[360px] flex flex-col gap-2 justify-between">
            <div className="relative brightness-50 hover:brightness-100 group">
                <img
                    src={imageUrl}
                    alt="prodact"
                    className="w-full h-[320px]"
                />

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden group-hover:block">
                    <CustomButton
                        inverted
                        onClick={() => {
                            addItem(item);
                        }}
                    >
                        Add to Cart
                    </CustomButton>
                </div>
            </div>

            <div className="flex px-4 justify-between">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
