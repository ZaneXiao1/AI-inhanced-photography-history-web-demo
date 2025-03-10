import React, { useEffect, useState } from "react";
import "./TimelinePage.css";

function TimelinePage() {
  // 这是一个静态示例数据，实际可从数据库或 props 中获取
  // const timelineData = [
  //   {
  //     decade: "1980s",
  //     eventTitle: "The Stimming Pool. 2024",
  //     eventSubtitle: "By The Neurocultures Collective, Steven Eastwood",
  //     time: "1:00 p.m.",
  //     description:
  //       "Followed by a conversation with the filmmakers, moderated by Alena Lodkina",
  //     imageUrl:
  //       "https://cdn-ffcgi.nitrocdn.com/ZhDYBbXPoHrCHvLPGOdQmXKAjZXwoPng/assets/images/optimized/rev-bea8d4d/jamesmaherphotography.com/wp-content/uploads/2016/08/William_Eggleston_Photograph-20.jpg",
  //   },
  //   {
  //     decade: "1980s",
  //     eventTitle: "Gürünür Görünmez",
  //     eventSubtitle: "An Anthology of (Auto)Censorship. 2023",
  //     time: "2:30 p.m.",
  //     description:
  //       "Directed by Senn Jenson Collective Jericho Walk. 2025. Directed by Jim McKay...",
  //     imageUrl:
  //       "https://aperture.org/wp-content/uploads/2024/07/WEBB_13_hires.jpg",
  //   },
  //   {
  //     decade: "1990s",
  //     eventTitle: "B. F. Skinner Plays Himself. 2025",
  //     eventSubtitle: "Directed by Ted Kennedy",
  //     time: "3:00 p.m.",
  //     description: "Another example of an event in the 1990s timeline.",
  //     imageUrl:
  //       "https://images.squarespace-cdn.com/content/v1/58adfb9237c581abe8c7e5fb/1513703810550-VWFXBFAJ3SQJ3VSCP4X9/Neg_0141_Book.jpg?format=1000w",
  //   },
  // ];

  // 从数据库获取数据

  // DataSample from backend is like this:
  //[
  //   {
  //     "eventid": 1,
  //     "year": 1839,
  //     "eventname": "Official Disclosure of Photography",
  //     "genre": "Photography Tech Development",
  //     "eventdescription": "Louis Daguerre publicly introduced the Daguerreotype process at the French Academy of Sciences, and the French government declared it a gift to the world.",
  //     "meaning": "This marked the starting point of photography being recognized by the public, making photography possible and rapidly spreading worldwide.",
  //     "image_url": "https://cdn2.picryl.com/photo/2021/03/26/daguerre-kynzvart-2528c2-640.jpg"
  //   },
  //   {
  //     "eventid": 2,
  //     "year": 1839,
  //     "eventname": "The Calotype Process",
  //     "genre": "Photography Tech Development",
  //     "eventdescription": "William Henry Fox Talbot invented the salted paper print, later developed into the Calotype, which allowed for multiple reproductions (unlike the single-image Daguerreotype).",
  //     "meaning": "It is considered the predecessor of modern negative-positive photography.",
  //     "image_url": "https://cdn21.picryl.com/photo/1844/01/01/the-pencil-of-nature-f2361c-1024.jpg"
  //   }
  //   // ...
  // ]

  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // 调用你的 Lambda Function URL
    fetch(
      "https://zjc26tmu6qoq6vmxbf2bvklscq0xvrut.lambda-url.us-east-2.on.aws/"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched events:", data);
        setTimelineData(data); // <--- 把返回的数据存到 timelineData
      })

      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  // 根据返回数据中的 'year' 或自定义字段计算 decade
  // 例如：将 1839 转成 "1830s"
  const getDecade = (year) => {
    if (!year) return "Unknown";
    const decade = Math.floor(year / 10) * 10;
    return `${decade}s`;
  };

  // 对数据进行分组，按照 decade 分组
  const groupedData = timelineData.reduce((acc, item) => {
    const decade = getDecade(item.year);
    if (!acc[decade]) {
      acc[decade] = [];
    }
    acc[decade].push(item);
    return acc;
  }, {});

  console.log("render timelineData:", timelineData);
  return (
    <div className="timeline-container">
      {Object.entries(groupedData).map(([decade, events]) => (
        <div className="decade-block" key={decade}>
          {/* 左列：显示一次 decade */}
          <div className="decade-left">
            <span className="decade-label">{decade}</span>
          </div>

          {/* 右侧容器：包含多个事件行 */}
          <div className="decade-events">
            {events.map((item, index) => (
              <div className="event-row" key={item.eventid || index}>
                {/* 中列：事件信息 */}
                <div className="timeline-center">
                  <h2 className="event-title">{item.eventname}</h2>
                  <p className="event-time">Year: {item.year}</p>
                  <p className="event-description">{item.eventdescription}</p>
                  <p className="event-meaning">{item.meaning}</p>
                </div>
                {/* 右列：图片 */}
                <div className="timeline-right">
                  {item.image_url && (
                    <img src={item.image_url} alt={item.eventname} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelinePage;
