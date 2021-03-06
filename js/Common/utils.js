export function isFunction(func) {
  return typeof func === "function";
}

export function validateFunction(func) {
  if (isFunction(func)) {
    return;
  }
  throw new Error(`${func} is not a function`);
}

export function isBoolean(boolean) {
  return typeof boolean === "boolean";
}

export function isEmptyString(str) {
  return str === "";
}

export function validateInstance(object, instance) {
  if (!(instance instanceof object)) {
    throw new Error("Create instance with 'new'");
  }
}

export function validateTeams(teams) {
  if (!Array.isArray(teams)) throw new Error("teams is not an array");
  teams.forEach((team) => validateTeam(team));
}

export function validateTeam(team) {
  if (
    team &&
    "_id" in team &&
    typeof team._id === "string" &&
    "name" in team &&
    typeof team.name === "string" &&
    "members" in team &&
    Array.isArray(team.members)
  ) {
    return;
  }
  throw new Error("Wrong team");
}

export function validateTodoItems(todoItems) {
  if (!Array.isArray(todoItems)) throw new Error("todoItems is not an array");
  todoItems.forEach((todoItem) => validateTodoItem(todoItem));
}

export function validateTodoItem(todoItem) {
  if (
    todoItem &&
    "_id" in todoItem &&
    typeof todoItem._id === "string" &&
    "contents" in todoItem &&
    typeof todoItem.contents === "string" &&
    "isCompleted" in todoItem &&
    typeof todoItem.isCompleted === "boolean"
  ) {
    return;
  }
  throw new Error("Wrong todoItem");
}

export function validateName(name) {
  if (typeof name !== "string") {
    throw new Error("Wrong name type");
  }
  if (isEmptyString(name)) {
    throw new Error("name is an empty string");
  }
}

export function getUrlParams() {
  const params = {};
  window.location.search
    .substr(window.location.search.indexOf("?") + 1)
    .split("&")
    .forEach((param) => {
      const [key, value] = param.split("=");
      params[key] = value;
    });
  return params;
}
