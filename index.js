function createNestedArray (height, width)
{
  let result = [];
  for (let i = 0; i < height; i++)
  {
    result.push([])
    for (let j = 0; j < width; j++)
    {
      result[i].push(getRandomChar());
    }
  }

  return result;
}

function getRandomChar ()
{
  let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return characters[Math.floor(Math.random() * (26 - 0) + 0)];
}

console.log(createNestedArray(5,3));
console.log(createNestedArray(4,2));
