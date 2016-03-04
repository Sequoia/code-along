//make this work:
console.log(
  div(
    mul( 21, 40 ),
    mul(10, 2)
  )
);

function div(x, y){
  return x / y;
}

function mul(x, y){
  return x * y;
}
