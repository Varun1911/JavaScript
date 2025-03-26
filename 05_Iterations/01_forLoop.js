// for (let i = 0; i < 10; i++) 
// {
//     console.log(i);
// }

for (let i = 0; i < 10; i++) 
{   
    if(i % 2 != 0) {}
        // console.log(i);
}


for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(`Outer loop ${element}`);
    
    for (let j = 0; j < 10; j++) {
        const element2 = j;
        // console.log(`Inner loop ${element2}`);
    }
}


//break and continue

for (let index = 1; index <= 20; index++) 
{
    if(index == 5)
    {
        break;
    }
    // console.log(index);    
}


for (let index = 1; index <= 20; index++) 
{
    if(index == 5)
    {
        continue;
    }
    console.log(index);    
}