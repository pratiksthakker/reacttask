import React, { useCallback } from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
    addItemToCart,
    removeItemFromCart
} from "../../store/actions";
import { calculateDiscount } from "./cartactions";
const CartContainer = styled.div`
    padding-top: 50px;
`;

const ShoppingItemsList = styled.div`
    width: 50vw;
    min-height: 40vh;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
`;

const ListHeader = styled.h2``;

const TableHeaderText = styled.h4``;
const TableItemText = styled.h5``;

const Row = styled.div`
    display: flex;
`;

const TotalColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0 20px;
`;

const ItemColumn = styled.div`
    width: 50%
`;
const QuantityColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%
`;
const PriceColumn = styled.div`
    width: 20%
`;

const Divider = styled.hr`
    border: 1px solid #d3d3d3;
`;

const Button = styled.button`
    border: 1px solid #d3d3d3;
    height: 20px;
    margin: 0 8px;
    &:hover {
        cursor: pointer;
    }
`;

const SubmitButton = styled.button`
    border: 1px solid #d3d3d3;
    height: 20px;
    margin: 0 8px;
    &:hover {
        cursor: pointer;
    }
`;

class Cart extends React.Component {

    componentWillMount() {
        this.props.calculateDiscount(this.props.selectItemsInCart, this.props.couponCode)
    }
    handleAdd = (itemName) => {
        this.props.addItemToCart(itemName)
        this.props.calculateDiscount(this.props.selectItemsInCart, this.props.couponCode)
    }
    handleRemove = (itemName) => {
        this.props.removeItemFromCart(itemName)
        this.props.calculateDiscount(this.props.selectItemsInCart, this.props.couponCode)
    }

    handleVoucher = () => {
        this.props.calculateDiscount(this.props.selectItemsInCart, this.props.couponCode)
    }

    //selectItemsInCart = this.props.shoppingItems.filter(item => item.quantity > 0);
    //selectTotalPrice = this.props.selectItemsInCart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);

    render() {

        let discountRow, discountDescription
        //this.discountPrice = 
        if (this.props.discountedPrice > 0.0) {
            this.selectTotalPrice = this.props.discountedPrice;
            discountRow = <Row><TotalColumn><TableHeaderText>Discounted Price: $ {this.selectTotalPrice.toFixed(2)}</TableHeaderText></TotalColumn></Row>
            discountDescription = <Row><TotalColumn><TableHeaderText>Description: {this.props.discountDescription}</TableHeaderText></TotalColumn></Row>
        } else {
            this.selectTotalPrice = (this.props.selectItemsInCart.reduce((acc, item) => acc + (item.price * item.quantity), 0));
            discountRow = <Row><TotalColumn><TableHeaderText>Total: $ {this.selectTotalPrice.toFixed(2)}</TableHeaderText></TotalColumn></Row>
        }
        return <CartContainer>
            {this.props.selectItemsInCart.length > 0 ? <ShoppingItemsList>
                <ListHeader>Items In Cart</ListHeader>
                <Divider />
                <Row>
                    <ItemColumn><TableHeaderText>Name</TableHeaderText></ItemColumn>
                    <QuantityColumn><TableHeaderText>Quantity</TableHeaderText></QuantityColumn>
                    <PriceColumn><TableHeaderText>Price</TableHeaderText></PriceColumn>
                </Row>
                <Divider />
                {this.props.selectItemsInCart.map((item, index) => {
                    return <><Row>
                        <ItemColumn><TableItemText>{item.name}</TableItemText></ItemColumn>
                        <QuantityColumn>
                            <Button><FontAwesomeIcon icon={faPlus} onClick={() => { this.handleAdd(item.id) }} /></Button>
                            <TableItemText>{item.quantity}</TableItemText>
                            <Button><FontAwesomeIcon icon={faMinus} onClick={() => { this.handleRemove(item.id) }} /></Button>
                        </QuantityColumn>
                        <PriceColumn><TableItemText>{`$ ${(item.quantity * item.price).toFixed(2)}`}</TableItemText></PriceColumn>
                    </Row></>
                })}
                <Divider />
                {discountRow}
                {discountDescription}
                <Row></Row>
            </ShoppingItemsList> : <ListHeader>No Items In Cart</ListHeader>}
        </CartContainer>;
    }
}

const mapStateToProps = state => ({
    shoppingItems: state.homereducer.shoppingItems,
    selectItemsInCart: state.homereducer.shoppingItems.filter(item => item.quantity > 0),
    discountedPrice: state.homereducer.discountedPrice,
    discountPerc: state.homereducer.discountPerc,
    discountDescription: state.homereducer.discountDescription,
    couponCode: state.homereducer.couponCode
});

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (itemName) => { dispatch(addItemToCart(itemName)) },
        removeItemFromCart: (itemName) => { dispatch(removeItemFromCart(itemName)) },
        calculateDiscount: (items, couponCode) => { dispatch(calculateDiscount(items, couponCode)) }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);