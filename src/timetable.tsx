import * as React from "react";
import * as DateTimeHelpers from "./helpers/datetime";
import * as Api from "./interface/data";
import * as ExampleData from "./example/apiData";

// global height
let globalHeight: number = 400;
let globalWidth: number = 18;
let globalHeaderHeight: number = 20;

/* 
    TimeTable TimeSpan 
 */
interface ITimeTableTimeSpanProps {
  timespans: Api.ITimeSpan[];
}
class TimeTableTimeSpan extends React.Component<ITimeTableTimeSpanProps, {}> {
  render() {
    let styleWrapper: React.CSSProperties = {
      position: "relative",
      height: globalHeight,
      width: globalWidth
    };
    let styleTimeSpan: React.CSSProperties = {
      position: "absolute",
      top: 0, // startPosition,
      left: 0,
      height: 0, // endPosition - startPosition,
      width: "100%",
      backgroundColor: "blue"
    };

    let bars = null;
    if (this.props.timespans != null) {
      bars = this.props.timespans.map(n => {
        let startPosition: number = DateTimeHelpers.CalculatePosition(
          globalHeight,
          n.start
        );
        let endPosition: number = DateTimeHelpers.CalculatePosition(
          globalHeight,
          n.end
        );

        let currentStyle: React.CSSProperties = Object.assign(
          {},
          styleTimeSpan
        );
        currentStyle.top = startPosition;
        currentStyle.height = endPosition - startPosition;
        currentStyle.backgroundColor = n.color;

        return (
          <div className="timetable__timespan__bar" style={currentStyle} />
        );
      });
    }

    return (
      <div className="timetable__timespan" style={styleWrapper}>
        {bars}
      </div>
    );
  }
}

/* 
    TimeTable Section 
 */
interface ITimeTableSectionProps {
  SectionName: string;
}
class TimeTableSection extends React.Component<ITimeTableSectionProps, {}> {
  render() {
    let styleHeader: React.CSSProperties = {
      height: globalHeaderHeight
    };
    return (
      <div className="timetable__section">
        <div className="timetable__section__name" style={styleHeader}>
          {this.props.SectionName}
        </div>
        <div className="timetable__section__content">{this.props.children}</div>
      </div>
    );
  }
}

/* 
    TimeTable Day 
 */
interface ITimeTableDayProps {
  DayName: string;
}
class TimeTableDay extends React.Component<ITimeTableDayProps, {}> {
  /**
   *
   */

  render() {
    let styleContainer: React.CSSProperties = {
      height: 400
    };
    let styleHeader: React.CSSProperties = {
      height: globalHeaderHeight
    };
    return (
      <div className="timetable__day">
        <div className="timetable__day__name" style={styleHeader}>
          {this.props.DayName}
        </div>
        <div className="timetable__day__content" style={styleContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

/* 
    TimeTable Legend 
 */
class TimeTableLegend extends React.Component {
  render() {
    let styleContainer: React.CSSProperties = {
      width: "30px",
      position: "relative",
      textAlign: "left",
      float: "left",
      marginTop: globalHeaderHeight * 2
    };

    const hours = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ];
    let items = hours.map(n => {
      let d = new Date(0, 0, 0, n, 0, 0, 0);
      let position: number = DateTimeHelpers.CalculatePosition(globalHeight, d);
      let style: React.CSSProperties = Object.assign({}, styleContainer);
      style.top = position;
      style.left = 0;
      style.position = "absolute";
      style.borderTop = "solid 1px grey";
      style.fontSize = "8px";
      style.marginTop = 0;

      return <span style={style}>{d.getHours()}</span>;
    });

    return (
      <div className="timetable__legend" style={styleContainer}>
        {items}
      </div>
    );
  }
}

class TimeTableContainers extends React.Component {
  render() {
    return (
      <div className="timetable">
        <TimeTableLegend />
        <div className="timetable--verticalscroll">{this.props.children}</div>
      </div>
    );
  }
}

interface ITimeTableProps {
  d: Api.IData;
}
export class TimeTable extends React.Component<ITimeTableProps, {}> {
  render() {
    let renderData = null;
    if (this.props.d != null) {
      renderData = this.props.d.data.map((a, i) => {
        // section
        let sections = null;
        if (a.sections != null) {
          sections = a.sections.map((b, ib) => {
            let subsections = null;
            // subsections
            if (b.subsection != null) {
              subsections = b.subsection.map(c => {
                return <TimeTableTimeSpan timespans={c.timeSpan} />;
              });
            }

            return (
              <TimeTableSection SectionName={b.sectionName}>
                {subsections}
              </TimeTableSection>
            );
          });
        }

        return <TimeTableDay DayName={a.dayName}>{sections}</TimeTableDay>;
      });
    }

    return <TimeTableContainers>{renderData}</TimeTableContainers>;
  }
}
