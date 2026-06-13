components - reusable piece of code
map - transform
filter - filteration based on some values

<h2>
        {arr.map((elem) => {
          return <h1>{elem} is King...</h1>;
        })}
      </h2>

    {arr.filter(function(elem){
      return elem>2;
    })}
    <br />

    {arr.filter((val)=>{
      return val>2;
    })}

props - object m data leta h