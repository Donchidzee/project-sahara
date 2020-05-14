let salon = { 
    sales: [
        {name: 'Ilona', salary: 1000}, 
        {name: 'Vera', salary: 1600}],
    development: {
      sites: [
          {name: 'Katya', salary: 2000}, 
          {name: 'Sasha', salary: 1800}],
      internals: [{name: 'Anastasiya', salary: 1300}]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) { 
      return department.reduce((prev, current) => prev + current.salary, 0); 
    } else { 
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
}
  
console.log(sumSalaries(salon));