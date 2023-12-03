import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="bg-white shadow-sm">
            <h3 className="p-2 bg-slate-100">Transactions</h3>
            <ul>
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} {...transaction} />
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
