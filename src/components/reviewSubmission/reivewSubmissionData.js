const formData = [
    {
        id: 1,
        optional: false,
        title: "Select Class Name",
        data: ["Not Found", "CS 31", "CS 32", "CS 35L"],
    },
    {
        id: 2,
        optional: false,
        title: "Select Professor",
        data: ["Not Found", "Nachenberg", "Stahl", "Eggert"],
      },
      {
        id: 3,
        optional: true,
        title: "Select Year Taken",
        data: ["2020", "2019", "2018", "2017"],
      },
      {
        id: 4,
        optional: true,
        title: "Select Quarter Taken",
        data: ["Fall", "Winter", "Spring", "Summer"],
      },
      {
        id: 5,
        optional: true,
        title: "Select Grade",
        data: ["A", "B", "C", "Failed"],
      }
]

export default formData;