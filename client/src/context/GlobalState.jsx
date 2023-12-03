import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer";
import axios from "axios";

// Create the initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true,
};

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions
    async function getTransactions() {
        try {
            const res = await axios.get("/api/v1/transactions");

            dispatch({
                type: "GET_TRANSACTIONS",
                payload: res.data.data,
            });
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error,
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id,
            });
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error,
            });
        }
    }

    async function addTransaction(transaction) {
        try {
            const res = await axios.post("/api/v1/transactions", transaction, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res);
            dispatch({
                type: "ADD_TRANSACTION",
                payload: res.data.data,
            });
        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error,
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                error: state.error,
                loading: state.loading,
                getTransactions,
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
