import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  title: "Nature",
};

const TopicListItem = ({topic}) => {
  return (
    <div className="topic-list__item">
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;
