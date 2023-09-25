import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({topics}) => {
  
  const topicList = topics.map((topic) => (
    <TopicListItem
   key = {topic.id} topic={topic}
    />))

  return (
    <div className="top-nav-bar__topic-list">
    {topicList}
    </div>
  );
};

export default TopicList;
