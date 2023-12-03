import Balance from "./Balance";

const Header = () => {
    return (
        <header className="bg-slate-100 flex flex-col xs:flex-row items-start xs:items-center justify-between w-full p-2">
            <h2 className="text-2xl bold">Expense Tracker</h2>
            <Balance />
        </header>
    );
};

export default Header;
