import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyState({ 
  icon, 
  title, 
  description, 
  actionText, 
  actionLink 
}) {
  return (
    <div className="empty-state">
      <div className="empty-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      {actionText && actionLink && (
        <Link to={actionLink} className="action-button">
          {actionText}
        </Link>
      )}
    </div>
  );
}