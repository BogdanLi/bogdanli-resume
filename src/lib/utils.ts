export function getMonth(month: string, lang: string) {
  if (lang === "ru") {
    return {
      1: "Январь",
      2: "Февраль",
      3: "Март",
      4: "Апрель",
      5: "Май",
      6: "Июнь",
      7: "Июль",
      8: "Август",
      9: "Сентябрь",
      10: "Октябрь",
      11: "Ноябрь",
      12: "Декабрь",
    }[Number(month)];
  }
  return {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  }[Number(month)];
}

export function getEmploymentType(type: number, lang: string) {
  if (lang === "ru") {
    return {
      1: "Полная занятость",
      2: "Частичная занятость",
      3: "Проектная работа",
      4: "Стажировка",
    }[type];
  }
  return {
    1: "Full-time",
    2: "Part-time",
    3: "Project work",
    4: "Internship",
  }[type];
}

export function getLocationType(type: number, lang: string) {
  if (lang === "ru") {
    return {
      1: "Офис",
      2: "Удалённая работа",
      3: "Гибрид",
    }[type];
  }
  return {
    1: "On-site",
    2: "Remote work",
    3: "Hybrid",
  }[type];
}
