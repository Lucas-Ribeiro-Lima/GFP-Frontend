import { Login } from "@/components/login";

export default function Default() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1">
        <Login.Aside/>
        <Login.Main />
      </div>
      <Login.Footer />
    </div>
  );
}
