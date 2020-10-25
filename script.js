$(() => {



    $('#btn').click(() => {
        let city = $('#inp').val()
        let temperature;
        const unit="metric";
        console.log(city)
        let res = $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a900735ccdce7afd6b32191ff8d5f604&units=${unit}`, (data) => {
            temperature = data.main.temp
            console.log(temperature)
            $('.box_1').append(
                $(`<div>`).text(temperature)

            )


        })


    })
})

