const username=["admin","anwar","david","eric","emily"]
if (username.includes("admin"))
{
    console.log("Hello admin, would you like to see a status report?")
}
else if(username.includes("anwar"))
{
    console.log('Hello anwar thank you for logging in again.')
}
else if(username.includes("david"))
{
    console.log('Hello david thank you for logging in again.')
}
else if(username.includes("eric"))
{
    console.log('Hello eric thank you for logging in again.')
}
else
{
     console.log("We need to find some users!")
}

