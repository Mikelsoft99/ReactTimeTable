/*
  Interfaces for the api data
*/

export interface ITimeSpan {
  id: number;
  start: Date;
  end: Date;
  name: string;
  color: string;
}

export interface ITimeTableSection {
  id: number;
  sectionName: string;
  subsection: ITimeTableSubSection[];
}

export interface ITimeTableSubSection {
  id: number;
  subsectionName: string;
  timeSpan: ITimeSpan[];
}

export interface ITimeTableDay {
  id: number;
  dayName: string;
  sections: ITimeTableSection[];
}

export interface IData {
  options: any;
  data: ITimeTableDay[];
}
