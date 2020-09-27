let salon = { 
    sales: [
        {name: 'Ilona', salary: 10000}, 
        {name: 'Vera', salary: 18000}],
    development: {
      sites: [
          {name: 'Katya', salary: 14000}, 
          {name: 'Sasha', salary: 13000}],
      internals: [{name: 'Anastasiya', salary: 15000}]
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