import React from "react";

const TaskItem = ({ difficulty, title, description, points }) => {
  // Helper function to determine difficulty class
  const getDifficultyClass = (level) => {
    return difficulty.toLowerCase() === level ? "active" : "";
  };

  return (
    <div className="task-item">
      <div className="task-header-row">
        <div className="difficulty-tags">
          {/* We render all three tags and highlight the matching one based on props */}
          <span className={`diff-tag ${getDifficultyClass("fácil")}`}>
            Fácil
          </span>
          <span className="diff-separator">•</span>
          <span className={`diff-tag ${getDifficultyClass("médio")}`}>
            Médio
          </span>
          <span className="diff-separator">•</span>
          <span className={`diff-tag ${getDifficultyClass("difícil")}`}>
            Difícil
          </span>
        </div>
        <div className="task-points-badge">{points}</div>
      </div>

      <h4 className="task-title">{title}</h4>
      <p className="task-description">{description}</p>
    </div>
  );
};

export default TaskItem;
