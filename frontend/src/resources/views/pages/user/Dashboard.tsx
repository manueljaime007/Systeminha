import { useAuth } from "../../../../contexts/AuthContext";

export const Dashboard = () => {
  const { logout, token } = useAuth();

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold">🔐 Painel do Dev Logado</h1>
      <p className="mt-2">Seu token: <code className="text-sm break-all">{token}</code></p>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded"
      >
        Sair
      </button>
    </div>
  );
};
