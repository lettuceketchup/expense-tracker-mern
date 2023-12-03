import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer";

// Create the initial state
const initialState = {
    transactions: [
        { id: 1, description: "Flower", amount: -20 },
        { id: 2, description: "Salary", amount: 300 },
        { id: 3, description: "Book", amount: -10 },
        { id: 4, description: "Camera", amount: 150 },
    ],
};

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};