const message = "This Code is running from Docker Container"
for (let index = 0; index < 999; index++) {
    console.log(new Date(), `${index} ${message}`)
}