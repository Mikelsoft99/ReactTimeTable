import * as React from "react";
import * as DateTimeHelpers from "./helpers/datetime";

// global height
let globalHeight: number = 400;
let globalWidth: number = 18;
let globalHeaderHeight: number = 20;

/* 
    TimeTable TimeSpan 
 */
interface ITimeTableTimeSpanProps {
  start: Date;
  end: Date;
}
class TimeTableTimeSpan extends React.Component<ITimeTableTimeSpanProps, {}> {
  render() {
    let startPosition: number = DateTimeHelpers.CalculatePosition(
      globalHeight,
      this.props.start
    );
    let endPosition: number = DateTimeHelpers.CalculatePosition(
      globalHeight,
      this.props.end
    );

    let styleWrapper: React.CSSProperties = {
      position: "relative",
      height: globalHeight,
      width: globalWidth
    };

    let styleTimeSpan: React.CSSProperties = {
      position: "absolute",
      top: startPosition,
      left: 0,
      height: endPosition - startPosition,
      width: "100%",
      backgroundColor: "blue"
    };

    return (
      <div className="timetable__timespan" style={styleWrapper}>
        <div className="timetable__timespan__bar" style={styleTimeSpan} />
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

export class TimeTable extends React.Component {
  render() {
    return (
      <TimeTableContainers>
        <TimeTableDay DayName="MO">
          <TimeTableSection SectionName="W">
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 10, 25, 0, 0)}
              end={new Date(0, 0, 0, 12, 15, 0, 0)}
            />
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 8, 0, 0, 0)}
              end={new Date(0, 0, 0, 12, 0, 0, 0)}
            />
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 15, 0, 0, 0)}
              end={new Date(0, 0, 0, 18, 0, 0, 0)}
            />
          </TimeTableSection>
          <TimeTableSection SectionName="U">
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 8, 0, 0, 0)}
              end={new Date(0, 0, 0, 16, 0, 0, 0)}
            />
          </TimeTableSection>
        </TimeTableDay>
        <TimeTableDay DayName="DI">
          <TimeTableSection SectionName="W">
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 10, 25, 0, 0)}
              end={new Date(0, 0, 0, 12, 15, 0, 0)}
            />
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 8, 0, 0, 0)}
              end={new Date(0, 0, 0, 12, 0, 0, 0)}
            />
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 15, 0, 0, 0)}
              end={new Date(0, 0, 0, 18, 0, 0, 0)}
            />
          </TimeTableSection>
          <TimeTableSection SectionName="U">
            <TimeTableTimeSpan
              start={new Date(0, 0, 0, 10, 0, 0, 0)}
              end={new Date(0, 0, 0, 17, 0, 0, 0)}
            />
          </TimeTableSection>
        </TimeTableDay>
      </TimeTableContainers>
    );
  }
}
