import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, getPhotosByTopics }) => {
  return (
    <div
      className="topic-list__item"
      onClick={() => getPhotosByTopics(topic.id)}
    >
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;
