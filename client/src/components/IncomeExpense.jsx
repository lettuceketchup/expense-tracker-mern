import { useContext } from "react";
import { toCurrency } from "../util/util";

import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const income = transactions
        .map((t) => t.amount)
        .filter((amount) => amount > 0)
        .reduce((acc, curr) => acc + curr, 0);
    const expense = transactions
        .map((t) => t.amount)
        .filter((amount) => amount < 0)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="w-full bg-white flex shadow-sm">
            <div className="flex-1 text-center border-r-2">
                <h4 className="text-left pl-2">Income</h4>
                <p
                    className="text-green-500 text-lg text-right pr-2"
                >
                    {income > 0 && "+"}
                    {toCurrency(income)}
                </p>
            </div>
            <div className="flex-1 text-center">
                <h4 className="text-left pl-2">Expense</h4>
                <p
                    className="text-red-500 text-lg text-right pr-2"
                >
                    {toCurrency(expense)}
                </p>
            </div>
        </div>
    );
};

export default IncomeExpense;
