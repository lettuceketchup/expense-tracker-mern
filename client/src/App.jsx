// import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/Transactions/TransactionList";
import AddTransaction from "./components/Transactions/AddTransaction";
import Footer from "./components/Footer";

import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <div className="max-w-md mx-auto my-0 h-[100vh] flex flex-col justify-start">
                <Header />
                <IncomeExpense />
                <div className="container my-1 max-w-md h-full flex flex-col justify-between">
                    <TransactionList />
                    <AddTransaction />
                </div>
                <Footer />
            </div>
        </GlobalProvider>
    );
}

export default App;
