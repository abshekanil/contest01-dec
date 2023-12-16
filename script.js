const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i=0; i<data.length; i++)
    {
        if(data[i].profession === "developer")
        {
            console.log(data[i]);
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter your name:");
    const age = prompt("Enter your age:");
    const profession = prompt("Enter your profession");

    let newData = {name , age:parseInt(age), profession};
    data.push(newData);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let deleteAdmin = data.filter(person => person.profession !== 'admin');
    console.log(deleteAdmin);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    let concatArr = [...arr1,...arr2];
    console.log(concatArr);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgAge = 0;
    for(let i=0; i<data.length; i++)
    {
        avgAge += parseInt(data[i].age);
    }
    console.log(avgAge/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let ageCount = 0;
    for(let i=0; i<data.length; i++)
    {
        if(data[i].age > 25)
        {
            ageCount++;
        }
    }
    
    if(ageCount >=1)
    {
        console.log("There is "+ ageCount+ " person who is older than 25 years old")
    }else
    {
        console.log("No person is older than 25 years old");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let distinctProfession = [];

    for(let i=0; i<data.length; i++)
    {
        const professionz = data[i].profession;
        if(!distinctProfession.includes(professionz))
        {
            distinctProfession.push(professionz);
        }
    }
    console.log(distinctProfession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0; i<data.length; i++)
    {
        if(data[i].name === 'john')
        {
            data[i].profession = 'manager';
        }
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let adminCount = 0;
    let devCount = 0;

    for(let i=0; i<data.length; i++)
    {
        if(data[i].profession === 'developer')
        {
            devCount++;
        } else if(data[i].profession === 'admin')
        {
            adminCount++;
        }
    }
    console.log("Admin count is "+adminCount);
    console.log("Developer count is "+devCount);
  }