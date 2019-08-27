import * as api from "./../interface/data";

export function GetSampleData(): api.IData {
  let exampleData: api.IData = {
    options: null,
    data: [
      {
        id: 1,
        dayName: "MO",
        sections: [
          {
            id: 1,
            sectionName: "Weiss",
            subsection: [
              {
                id: 1,
                subsectionName: "W1",
                timeSpan: [
                  {
                    id: 1,
                    color: "red",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 15, 0, 0),
                    end: new Date(0, 0, 0, 12, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "red",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 18, 0, 0, 0),
                    end: new Date(0, 0, 0, 21, 30, 0, 0)
                  }
                ]
              },
              {
                id: 2,
                subsectionName: "W2",
                timeSpan: [
                  {
                    id: 1,
                    color: "blue",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 0, 0, 0),
                    end: new Date(0, 0, 0, 11, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "green",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 17, 0, 0, 0),
                    end: new Date(0, 0, 0, 22, 30, 0, 0)
                  }
                ]
              },
              {
                id: 2,
                subsectionName: "W2",
                timeSpan: [
                  {
                    id: 1,
                    color: "lightblue",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 0, 0, 0),
                    end: new Date(0, 0, 0, 11, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "lightgreen",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 17, 0, 0, 0),
                    end: new Date(0, 0, 0, 22, 30, 0, 0)
                  }
                ]
              }
            ]
          },
          {
            id: 1,
            sectionName: "Pano",
            subsection: [
              {
                id: 1,
                subsectionName: "P1",
                timeSpan: [
                  {
                    id: 1,
                    color: "red",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 15, 0, 0),
                    end: new Date(0, 0, 0, 12, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "red",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 18, 0, 0, 0),
                    end: new Date(0, 0, 0, 21, 30, 0, 0)
                  }
                ]
              },
              {
                id: 1,
                subsectionName: "P2",
                timeSpan: [
                  {
                    id: 1,
                    color: "blue",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 0, 0, 0),
                    end: new Date(0, 0, 0, 11, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "green",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 17, 0, 0, 0),
                    end: new Date(0, 0, 0, 22, 30, 0, 0)
                  }
                ]
              },
              {
                id: 1,
                subsectionName: "P2",
                timeSpan: [
                  {
                    id: 1,
                    color: "blue",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 0, 0, 0),
                    end: new Date(0, 0, 0, 11, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "green",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 17, 0, 0, 0),
                    end: new Date(0, 0, 0, 22, 30, 0, 0)
                  }
                ]
              },
              {
                id: 1,
                subsectionName: "P2",
                timeSpan: [
                  {
                    id: 1,
                    color: "yellow",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 0, 0, 0),
                    end: new Date(0, 0, 0, 12, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "lightgreen",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 18, 30, 0, 0),
                    end: new Date(0, 0, 0, 22, 30, 0, 0)
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        dayName: "DI",
        sections: [
          {
            id: 1,
            sectionName: "Pano",
            subsection: [
              {
                id: 1,
                subsectionName: "P1",
                timeSpan: [
                  {
                    id: 1,
                    color: "red",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 15, 0, 0),
                    end: new Date(0, 0, 0, 12, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "red",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 18, 0, 0, 0),
                    end: new Date(0, 0, 0, 21, 30, 0, 0)
                  }
                ]
              },
              {
                id: 1,
                subsectionName: "P2",
                timeSpan: [
                  {
                    id: 1,
                    color: "blue",
                    name: "Noemi",
                    start: new Date(0, 0, 0, 8, 0, 0, 0),
                    end: new Date(0, 0, 0, 11, 0, 0, 0)
                  },
                  {
                    id: 1,
                    color: "green",
                    name: "Steffi",
                    start: new Date(0, 0, 0, 17, 0, 0, 0),
                    end: new Date(0, 0, 0, 22, 30, 0, 0)
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  return exampleData;
}
