import { useState } from "react";
import EditTodo from "./EditTodo";

function Todo({
  isButtonDisabled,
  onActive,
  todo,
  onDeleteClick,
  onUpdateClick,
}) {
  const [editTodo, setEditTodo] = useState(false);
  const [bgColor, setbgColor] = useState("");
  const [completedDuty, setCompletedDuty] = useState(false);

  const handleDeleteClick = () => {
    alert("Emin misiniz?");
    onDeleteClick(todo.id);
  };
  const handleEditClick = () => {
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
  };

  const handleStartedTimeClick = (id, elapsedTime) => {
    onActive(id, elapsedTime);
  };

  const handleFinishedClick = () => {
    onActive(null);
  };

  const handleDutyClick = () => {
    setCompletedDuty(true);
    setbgColor("bg-green-500");
  };

  const secondToHHMMSS = () => {
    const hours = Math.floor(todo.elapsedTime / 3600);
    const minutes = Math.floor((todo.elapsedTime - hours * 3600) / 60);
    const seconds = todo.elapsedTime - hours * 3600 - minutes * 60;

    return hours + ":" + minutes + ":" + seconds;
  };
  return (
    <div>
      {editTodo ? (
        <EditTodo
          onSubmit={handleSubmit}
          editTodo={editTodo}
          todo={todo}
          onUpdateClick={onUpdateClick}
        />
      ) : (
        <div
          className={`${
            Math.floor(todo.elapsedTime / 3600) > todo.time
              ? "bg-red-500"
              : bgColor
          } flex flex-row rounded-full mb-1 py-2`}
        >
          <div className="w-1/5 text-white flex flex-row items-center justify-center">
            {todo.text}
          </div>
          <div className="w-1/5 text-white flex flex-row items-center justify-center">
            {todo.time} saat
          </div>
          <div className="w-1/5 text-white flex flex-row items-center justify-center">
            {secondToHHMMSS()}
          </div>
          <div>
            {completedDuty ? (
              <div>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-red-800 border-gray-200 rounded-full hover:bg-red-600 focus:ring-2 focus:ring-gray-300"
                  onClick={handleDeleteClick}
                >
                  Sil
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center py-1 ">
                <button
                  className="px-4 py-2 m-1 text-sm font-medium text-white bg-green-500 border-gray-200 rounded-full hover:bg-green-300 focus:ring-2 focus:ring-gray-300"
                  onClick={() =>
                    handleStartedTimeClick(todo.id, todo.elapsedTime)
                  }
                >
                  Başlat
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-orange-500 border-gray-200 rounded-full hover:bg-orange-300 focus:ring-2 focus:ring-gray-300"
                  onClick={handleFinishedClick}
                  disabled={!isButtonDisabled}
                >
                  Durdur
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-teal-500 border-gray-200 rounded-full hover:bg-teal-300 focus:ring-2 focus:ring-gray-300"
                  onClick={handleDutyClick}
                >
                  Gorevi Tamamla
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-red-800 border-gray-200 rounded-full hover:bg-red-600 focus:ring-2 focus:ring-gray-300"
                  onClick={handleDeleteClick}
                  disabled={isButtonDisabled}
                >
                  Sil
                </button>
                <button
                  className="px-4 py-2 m-1  text-sm font-medium text-white bg-violet-500 border-gray-200 rounded-full hover:bg-violet-300 focus:ring-2 focus:ring-gray-300"
                  onClick={handleEditClick}
                  disabled={isButtonDisabled}
                >
                  Guncelle
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Todo;
