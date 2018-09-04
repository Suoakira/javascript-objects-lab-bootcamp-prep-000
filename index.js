let recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function updateObjectWithKeyAndValue(object, key, value) {
  let clone = object.assign({}, object, key, value)
  return clone
}