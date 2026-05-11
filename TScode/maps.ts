let maps : Map<string, number> = new Map();
maps.set("one", 1);
maps.set("two", 2);
maps.set("three", 3);

for(let keys of maps.keys())
{
    console.log(keys);
}

for(let values of maps.values())
{
    console.log(values);
}
for(let entries of maps.entries())
{
    console.log(entries);
}   
for(let keys in maps){
    console.log(keys);
}