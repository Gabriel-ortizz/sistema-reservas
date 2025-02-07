export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold">Gerenciador</h2>
      <nav>
        <ul>
          <li className="mt-4">
            <a href="/" className="hover:text-gray-400">Dashboard</a>
          </li>
          <li className="mt-2">
            <a href="/projects" className="hover:text-gray-400">Projetos</a>
          </li>
          <li className="mt-2">
            <a href="/tasks" className="hover:text-gray-400">Tarefas</a>
          </li>
          <li className="mt-2">
            <a href="/settings" className="hover:text-gray-400">Configurações</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
