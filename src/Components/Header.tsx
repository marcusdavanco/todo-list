import todoLogo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="flex justify-center w-full pt-18 pb-20 bg-gray-700">
      <img src={todoLogo} alt="Todo Logo" />
    </div>
  );
}
