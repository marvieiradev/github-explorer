import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const RepoFilters = ({
  sort,
  order,
  onSortChange,
  onOrderChange,
  disabled,
}) => {
  const selectClass =
    "px-4 py-2 bg-gray-800 border border-gray-700 roubded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed";
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 justify-center">
      <div className="flex items-center gap-2">
        <FaSort className="text-gray-400" />
        <label className="text-gray-400 text-sm">Ordenar por:</label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className={selectClass}
          disabled={disabled}
        >
          <option value="stars">Estrelas</option>
          <option value="forks">Forks</option>
          <option value="updated">Atualizado</option>
          <option value="help-wanted-issues">Issues com Ajuda Desejada</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        {order === "asc" ? (
          <FaSortUp className="text-gray-400" />
        ) : (
          <FaSortDown className="text-gray-400" />
        )}
        <label className="text-gray-400 text-sm">Ordem:</label>
        <select
          value={order}
          onChange={(e) => onOrderChange(e.target.value)}
          className={selectClass}
          disabled={disabled}
        >
          <option value="desc">Descendente</option>
          <option value="asc">Crescente</option>
        </select>
      </div>
    </div>
  );
};

export default RepoFilters;
