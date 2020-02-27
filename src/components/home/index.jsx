import React, { useCallback,useEffect } from "react";
import styled from "styled-components";
import ShoppingItem from "../shopping-item";
import { loadItems } from "./actions"
import { connect } from 'react-redux'
import {
    addItemToCart,
    removeItemFromCart
} from "../../store/actions";
const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;



class Home extends React.Component {

    componentWillMount() {
        loadItems()
    };

    handleAdd = (itemName) => {
        this.props.addItemToCart(itemName)
    }
    handleRemove = (itemName) => {
        this.props.removeItemFromCart(itemName)
    }
    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }


        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        
        return <HomeContainer>
            {this.props.shoppingItems.map((fruit) => {
                return <ShoppingItem key={fruit.id} item={fruit} onAddClick={() => {this.handleAdd(fruit.id)}} onRemoveClick={() => {this.handleRemove(fruit.id)}}></ShoppingItem>
            })}
        </HomeContainer>;
    }
}

const mapStateToProps = state => ({
    shoppingItems: state.homereducer.shoppingItems,
    loading: state.homereducer.loading,
    error: state.homereducer.error,
});

const mapDispatchToProps = dispatch => {
    return{
    loadItems : dispatch(loadItems()),
    addItemToCart : (itemName) => {dispatch(addItemToCart(itemName))},
    removeItemFromCart : (itemName) => {dispatch(removeItemFromCart(itemName))}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

